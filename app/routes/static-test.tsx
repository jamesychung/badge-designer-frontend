import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iframe Headers Test</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            text-align: center;
            background: rgba(255,255,255,0.1);
            padding: 40px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .success {
            color: #4ade80;
            font-size: 32px;
            margin-bottom: 20px;
        }
        .info {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .time {
            color: #94a3b8;
            font-size: 14px;
            margin-top: 20px;
        }
        .test-info {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="success">✅ Iframe Headers Working!</div>
        <div class="info">
            If you can see this page embedded in an iframe, then the X-Frame-Options and Content-Security-Policy headers are configured correctly.
        </div>
        <div class="test-info">
            <strong>Test Details:</strong><br>
            • Route: /static-test<br>
            • Headers: X-Frame-Options: ALLOWALL<br>
            • CSP: frame-ancestors *<br>
            • Time: ${new Date().toISOString()}
        </div>
        <div class="time">
            This page was generated server-side by Remix with explicit iframe-friendly headers.
        </div>
    </div>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Frame-Options": "ALLOWALL",
      "Content-Security-Policy": "frame-ancestors *",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
}; 