if (JSON.parse(localStorage.getItem('settings') || '{}').darkmode === "false") {
    toggleDM();
}

function toggleDM() {
    document.documentElement.classList.toggle('default');
    document.documentElement.classList.toggle('dark_mode');
    if (document.documentElement.classList.contains('default')) {
        localStorage.setItem('settings', '{"darkmode": "false"}');
    } else {
        localStorage.setItem('settings', '{"darkmode": "true"}');
    }
}
