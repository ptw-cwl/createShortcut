function createShortcut() {
    var shortcutName = document.getElementById('shortcutName').value.trim();
    var url = document.getElementById('url').value.trim();

    if (!shortcutName || !url) {
        alert('请输入快捷方式名称和网址。');
        return;
    }
    var content =
        `[{000214A0-0000-0000-C000-000000000046}]
       [InternetShortcut]
       IDList=
       URL=${url}
      `;

    var fileName = shortcutName + ".url";

    var blob = new Blob([content], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}