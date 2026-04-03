if (import.meta.env.DEV && typeof window !== "undefined") {
  const mountId = "agentation-root";
  let mount = document.getElementById(mountId);

  if (!mount) {
    mount = document.createElement("div");
    mount.id = mountId;
    document.body.appendChild(mount);
  }

  Promise.all([import("react"), import("react-dom/client"), import("agentation")])
    .then(([React, ReactDOM, agentation]) => {
      const root = window.__agentationRoot || ReactDOM.createRoot(mount);
      window.__agentationRoot = root;
      root.render(React.createElement(agentation.Agentation));
    })
    .catch((error) => {
      console.warn("Agentation failed to load:", error);
    });
}
