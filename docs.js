<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Documentation - Xyro API</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
    
    <style>
        :root {
            --bg-deep: #030014;
            --primary: #7000ff;
            --text-main: #ffffff;
            --text-muted: #94a3b8;
            --card-bg: rgba(15, 23, 42, 0.6);
            --border-light: rgba(255, 255, 255, 0.1);
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-deep);
            color: var(--text-main);
            margin: 0; padding: 0;
            line-height: 1.6;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
            display: flex;
            gap: 2rem;
        }

        /* Sidebar */
        aside {
            width: 250px;
            position: sticky;
            top: 2rem;
            height: fit-content;
        }

        .back-link {
            display: inline-block;
            margin-bottom: 2rem;
            color: var(--text-muted);
            text-decoration: none;
            transition: 0.3s;
        }
        .back-link:hover { color: white; transform: translateX(-5px); }

        .menu-item {
            display: block;
            padding: 10px;
            color: var(--text-muted);
            text-decoration: none;
            border-left: 2px solid transparent;
            margin-bottom: 5px;
        }
        .menu-item:hover, .menu-item.active {
            color: var(--primary);
            border-left-color: var(--primary);
            background: rgba(255,255,255,0.02);
        }

        /* Main Content */
        main { flex: 1; }

        h1 { font-size: 2.5rem; margin-bottom: 1rem; }
        h2 { font-size: 1.8rem; margin-top: 2rem; margin-bottom: 1rem; color: #fff; border-bottom: 1px solid var(--border-light); padding-bottom: 10px; }
        p { color: var(--text-muted); margin-bottom: 1rem; }

        .code-box {
            background: #0d1117;
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid var(--border-light);
            font-family: 'Fira Code', monospace;
            overflow-x: auto;
            margin: 1rem 0;
            color: #e6edf3;
        }

        .method {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-weight: bold;
            font-size: 0.8rem;
            margin-right: 10px;
        }
        .get { background: rgba(39, 201, 63, 0.2); color: #27c93f; }
        .post { background: rgba(255, 189, 46, 0.2); color: #ffbd2e; }

        @media (max-width: 768px) {
            .container { flex-direction: column; }
            aside { width: 100%; position: relative; }
        }
    </style>
</head>
<body>

    <div class="container">
        <aside>
            <a href="/" class="back-link"><i class="fas fa-arrow-left"></i> Back to Home</a>
            
            <h3 style="margin-bottom: 1rem; color: white;">Contents</h3>
            <nav>
                <a href="#" class="menu-item active">Introduction</a>
                <a href="#auth" class="menu-item">Authentication</a>
                <a href="#endpoints" class="menu-item">Endpoints</a>
                <a href="#errors" class="menu-item">Errors</a>
            </nav>
        </aside>

        <main>
            <h1>API Documentation</h1>
            <p>Welcome to the Xyro API reference. Learn how to integrate our tools into your application.</p>

            <h2 id="auth">Authentication</h2>
            <p>All API requests require an API Key to be included in the header.</p>
            <div class="code-box">Authorization: Bearer YOUR_API_KEY</div>

            <h2 id="endpoints">Endpoints</h2>
            
            <div style="margin-top: 2rem;">
                <span class="method get">GET</span> <strong>/v1/ai/chat</strong>
                <p style="margin-top: 10px;">Generate a response from the AI model.</p>
                <div class="code-box">
curl https://api.xyro.com/v1/ai/chat \
  -H "Authorization: Bearer KEY" \
  -d '{"message": "Hello"}'
                </div>
            </div>

            <div style="margin-top: 2rem;">
                <span class="method post">POST</span> <strong>/v1/image/generate</strong>
                <p style="margin-top: 10px;">Create an image from a text prompt.</p>
                <div class="code-box">
{
  "prompt": "A futuristic city",
  "size": "1024x1024"
}
                </div>
            </div>

        </main>
    </div>

</body>
</html>
