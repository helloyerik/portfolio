import re

with open('index_temp.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_css = """  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    :root {
      --bg: #08090a;
      --surface: rgba(255,255,255,0.02);
      --surface-hover: rgba(255,255,255,0.05);
      --text: #f7f8f8;
      --text-dim: #d0d6e0;
      --text-muted: #8a8f98;
      --accent: #5e6ad2;
      --accent-hover: #828fff;
      --premium: #7170ff;
      --border: rgba(255,255,255,0.08);
      --border-subtle: rgba(255,255,255,0.05);
      --radius: 8px;
      --radius-sm: 6px;
      --font-sans: 'Inter', var(--mi-font-family-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
      --font-mono: 'JetBrains Mono', var(--mi-font-family-mono, "Fira Code", monospace);
      --max-width: 1200px;
    }

    * { box-sizing: border-box; }

    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: var(--font-sans);
      font-feature-settings: "cv01", "ss03";
      margin: 0;
      padding: 0;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    a { color: var(--text-dim); text-decoration: none; cursor: pointer; transition: 0.2s; }
    a:hover { color: var(--text); }
    button { font-family: inherit; font-feature-settings: "cv01", "ss03"; cursor: pointer; border: none; outline: none; background: transparent; }

    /* HEADER */
    .header {
      background: #0f1011;
      border-bottom: 1px solid var(--border-subtle);
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 12px 24px;
    }
    .header-content {
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    .logo { font-size: 20px; font-weight: 600; color: var(--text); text-decoration: none; letter-spacing: -0.5px; }
    .logo:hover { text-decoration: none; }
    
    .search-box { flex: 1; max-width: 600px; }
    .search-box input {
      width: 100%; padding: 8px 16px; border: 1px solid var(--border); border-radius: var(--radius-sm);
      font-size: 15px; background: transparent; color: var(--text); transition: 0.2s;
    }
    .search-box input:focus { border-color: var(--accent-hover); outline: none; box-shadow: rgba(0,0,0,0.1) 0px 4px 12px; }
    
    .header-actions { display: flex; gap: 12px; align-items: center; }
    .btn { padding: 8px 16px; border-radius: var(--radius-sm); font-weight: 500; font-size: 14px; transition: 0.2s; border: 1px solid transparent; }
    .btn-premium { background: var(--accent); color: #fff; }
    .btn-premium:hover { background: var(--accent-hover); }
    .btn-profile { background: var(--surface); color: var(--text-dim); border: 1px solid var(--border); }
    .btn-profile:hover { background: var(--surface-hover); color: var(--text); }

    /* LAYOUT */
    .main { max-width: var(--max-width); margin: 0 auto; padding: 60px 24px; min-height: 70vh; }
    
    /* FOOTER */
    .footer { background: #0f1011; border-top: 1px solid var(--border-subtle); padding: 60px 24px 40px; margin-top: 80px; }
    .footer-content { max-width: var(--max-width); margin: 0 auto; }
    .footer-logo { margin-bottom: 40px; }
    .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 40px; margin-bottom: 40px; }
    .footer-heading { font-size: 14px; font-weight: 500; color: var(--text); margin: 0 0 20px 0; }
    .footer-col-2 { display: flex; gap: 40px; }
    .footer-list { display: flex; flex-direction: column; gap: 12px; }
    .footer-list a { color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 400; transition: 0.2s; }
    .footer-list a:hover { color: var(--text-dim); }
    .footer-bottom-links { display: flex; gap: 24px; padding-top: 32px; border-top: 1px solid var(--border-subtle); margin-bottom: 32px; flex-wrap: wrap; }
    .footer-bottom-links a { color: var(--text-muted); text-decoration: none; font-size: 13px; font-weight: 400; transition: 0.2s; }
    .footer-bottom-links a:hover { color: var(--text-dim); }
    .footer-copyright { color: var(--text-muted); font-size: 13px; }

    /* VIEWS */
    .view { display: none; animation: fade 0.3s ease; }
    .view.active { display: block; }
    @keyframes fade { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

    /* TYPOGRAPHY & UTILS */
    h1 { font-size: 48px; font-weight: 500; margin: 0 0 16px 0; letter-spacing: -1.056px; line-height: 1; }
    h2 { font-size: 24px; font-weight: 400; margin: 40px 0 20px 0; letter-spacing: -0.288px; }
    .desc { color: var(--text-muted); font-size: 18px; margin-bottom: 48px; font-weight: 400; letter-spacing: -0.165px; max-width: 600px; }
    .breadcrumbs { display: flex; gap: 8px; font-size: 13px; color: var(--text-muted); margin-bottom: 32px; flex-wrap: wrap;}
    .breadcrumbs a { color: var(--text-muted); text-decoration: none; transition: 0.2s; }
    .breadcrumbs a:hover { color: var(--text-dim); }

    /* SKYSMART STYLE GRID */
    .skysmart-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 48px 32px;
      margin-bottom: 80px;
    }

    .class-col h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 0 0 16px 0;
      color: var(--text);
      cursor: pointer;
      display: inline-block;
      letter-spacing: -0.24px;
    }
    .class-col h3:hover {
      text-decoration: underline;
    }

    .subject-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .subject-pill {
      display: flex;
      align-items: center;
      gap: 12px;
      background: transparent;
      color: var(--text-dim);
      border: 1px solid transparent;
      padding: 6px 12px;
      border-radius: var(--radius-sm);
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.2s ease;
      width: 100%;
      text-align: left;
    }

    .subject-pill:hover {
      background: var(--surface);
      color: var(--text);
      border-color: var(--border-subtle);
    }
    
    .subject-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
      margin-bottom: 60px;
    }
    .subject-grid .subject-pill {
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 12px 16px;
    }
    .subject-grid .subject-pill:hover {
      background: var(--surface-hover);
    }

    /* OTHER COMPONENTS */
    .select-dropdown { padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--surface); color: var(--text-dim); font-size: 14px; font-weight: 500; outline: none; appearance: none; }
    .select-dropdown:focus { border-color: var(--accent-hover); color: var(--text); }

    /* Cards */
    .grid-4 { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; margin-bottom: 60px; }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 24px; display: flex; gap: 16px; align-items: center; transition: 0.2s; cursor: pointer; color: inherit; text-decoration: none; }
    .card:hover { background: var(--surface-hover); transform: translateY(-2px); text-decoration: none; }
    .card-img { width: 60px; height: 84px; background: rgba(0,0,0,0.2); border: 1px solid var(--border-subtle); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: var(--text-dim); flex-shrink: 0; }
    .card-info h3 { margin: 0 0 4px 0; font-size: 16px; font-weight: 600; color: var(--text); }
    .card-info p { margin: 0; color: var(--text-muted); font-size: 14px; }
    .card-badge { display: inline-block; padding: 2px 8px; background: rgba(255,255,255,0.1); color: var(--text); border-radius: 4px; font-size: 11px; font-weight: 500; margin-top: 12px; }

    /* Book Header */
    .book-hero { display: flex; gap: 40px; align-items: flex-start; margin-bottom: 60px; }
    .book-hero-img { width: 160px; height: 220px; background: rgba(0,0,0,0.2); border: 1px solid var(--border); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 48px; flex-shrink: 0; }
    .book-hero-content { flex: 1; }
    .book-hero-content h1 { font-size: 32px; letter-spacing: -0.704px; margin-bottom: 16px; }
    .book-hero-meta { margin: 0 0 24px 0; line-height: 1.6; font-size: 15px; color: var(--text-dim); }
    .book-hero-meta strong { color: var(--text); font-weight: 500; }
    
    /* Nav Numbers */
    .chapter { margin-bottom: 48px; }
    .chapter-title { font-weight: 500; font-size: 16px; margin-bottom: 16px; color: var(--text); letter-spacing: -0.165px; }
    .num-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(56px, 1fr)); gap: 8px; }
    .btn-num { border: 1px solid var(--border); background: var(--surface); padding: 10px 0; text-align: center; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 14px; font-weight: 400; color: var(--text-dim); transition: 0.2s; cursor: pointer; }
    .btn-num:hover { background: var(--surface-hover); color: var(--text); }
    .btn-num.active { background: var(--accent); color: #fff; border-color: var(--accent); }

    /* Task View */
    .task-toolbar { display: flex; justify-content: space-between; margin-bottom: 24px; gap: 12px;}
    .ad-banner { background: transparent; border: 1px solid var(--border-subtle); color: var(--text-muted); text-align: center; padding: 16px; border-radius: var(--radius); margin-bottom: 24px; font-size: 13px; }
    
    .solution-box { border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; margin-bottom: 48px; background: #0f1011; }
    .solution-tabs { display: flex; border-bottom: 1px solid var(--border-subtle); background: transparent; overflow-x: auto; }
    .tab { padding: 12px 20px; font-size: 14px; font-weight: 500; color: var(--text-muted); cursor: pointer; border-bottom: 1px solid transparent; white-space: nowrap; margin-bottom: -1px; transition: 0.2s; }
    .tab:hover { color: var(--text-dim); }
    .tab.active { color: var(--text); border-bottom-color: var(--text); }
    
    .solution-body { padding: 32px; font-family: var(--font-mono); font-size: 15px; line-height: 1.8; color: var(--text-dim); }
    
    .premium-lock { background: #191a1b; padding: 48px; text-align: center; border-top: 1px solid var(--border-subtle); }
    .premium-lock h3 { margin-top: 0; font-size: 20px; letter-spacing: -0.24px; }
    .blur-text { filter: blur(4px); user-select: none; color: var(--text-muted); margin-bottom: -40px; text-align: left; font-size: 15px; line-height: 1.6; }

    .comments { background: #0f1011; padding: 32px; border-radius: var(--radius); margin-bottom: 40px; border: 1px solid var(--border); }
    .comments h3 { margin-top: 0; font-size: 18px; }
    
    .seo-block { margin-top: 60px; padding: 32px; border: 1px solid var(--border-subtle); border-radius: var(--radius); background: transparent; }
    .seo-block h3 { margin-top: 0; font-size: 18px; font-weight: 500; color: var(--text); letter-spacing: -0.165px; }
    .seo-block p { color: var(--text-muted); font-size: 15px; line-height: 1.6; margin-bottom: 0; }

    /* MOBILE ADAPTIVE */
    @media (max-width: 900px) {
      .skysmart-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 768px) {
      .header-content { flex-wrap: wrap; }
      .search-box { order: 3; max-width: 100%; min-width: 100%; }
      .main { padding: 32px 16px; }
      h1 { font-size: 32px; letter-spacing: -0.704px; }
      .desc { font-size: 16px; margin-bottom: 32px; }
      
      .skysmart-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 16px; margin-bottom: 48px; }
      .subject-grid { grid-template-columns: repeat(2, 1fr); }

      .book-hero { flex-direction: column; align-items: flex-start; gap: 24px; margin-bottom: 40px; }
      .task-toolbar { flex-direction: column; }
      .task-toolbar .btn { width: 100%; text-align: center; padding: 10px; }
      .footer-grid { grid-template-columns: 1fr; gap: 32px; }
      .footer-col-2 { flex-direction: column; gap: 12px; }
      .footer-bottom-links { flex-direction: column; gap: 16px; }
      .solution-body { padding: 20px; font-size: 14px; }
      .premium-lock { padding: 32px 16px; }
    }
    @media (max-width: 480px) {
      .skysmart-grid { grid-template-columns: 1fr; }
      .subject-grid { grid-template-columns: 1fr; }
    }
  </style>"""

updated_content = re.sub(r'  <style>.*?</style>', new_css, content, flags=re.DOTALL)

with open('index_temp.html', 'w', encoding='utf-8') as f:
    f.write(updated_content)

