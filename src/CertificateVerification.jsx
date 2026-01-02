import React, { useEffect, useRef, useState } from "react";
import "./CertificateVerification.css";

const CERT_REGEX = /^[A-Z0-9]{1,3}\/[A-Z0-9]{1,3}\/[A-Z0-9]{1,5}$/;

const CertificateVerification = () => {
  const [page, setPage] = useState("success"); // success | form
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState("");
  const canvasRef = useRef(null);

  /* ========= CONFETTI (ONLY ONCE, 6–7s) ========= */
  useEffect(() => {
    if (page !== "success") return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#ff6b6b", "#4ecdc4", "#ffd166", "#a29bfe"];
    const confetti = [];

    for (let i = 0; i < 120; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 1,
        life: 400,
      });
    }

    let frame;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      if (confetti.some((p) => p.life > 0)) {
        frame = requestAnimationFrame(animate);
      }
    };

    animate();

    const stop = setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 7000);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(stop);
    };
  }, [page]);

  /* ========= VERIFY ========= */
  const handleVerify = (e) => {
    e.preventDefault();
    if (CERT_REGEX.test(certificateId.trim().toUpperCase())) {
      setResult("✔ Certificate Verified Successfully");
    } else {
      setResult("✖ Invalid Certificate Format");
    }
  };

  return (
    <>
      {page === "success" && <canvas ref={canvasRef} className="confetti-canvas" />}

      {page === "success" && (
        <div className="success-page">
          <header className="logo">OASIS INFOBYTE</header>

          <div className="success-card">
            <div className="check">✔</div>
            <h1>Your Document Is Verified.</h1>
            <p>
              The Candidate Have Successfully Completed One Month
              <br />
              Virtual Internship Under Oasis Infobyte
            </p>

            <button onClick={() => setPage("form")}>
              Verify Certificate
            </button>
          </div>
        </div>
      )}

      {page === "form" && (
        <div className="form-page">
          <header className="logo blue">OASIS INFOBYTE</header>

          <div className="form-card">
            <h2>Certificate Verification</h2>
            <span className="underline"></span>

            <form onSubmit={handleVerify}>
              <label>Certificate Id</label>
              <input
                placeholder="Enter your certificate id"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
              />
              <button type="submit">Verify</button>
            </form>

            {result && <p className="result">{result}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateVerification;
