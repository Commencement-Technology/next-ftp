export default function ItemIcon({ fileType, fileName }) {

    if (fileType === 1) {
        return <Icon className="fa-solid fa-folder" />
    }

    const EXTENSION = fileName.split(".").pop();
    const imageIconClass = 'fa-solid fa-file-image';
    const codeIconClass = 'fa fa-solid fa-file-code';

    const MIME = {
        "ico": imageIconClass,
        "gif": imageIconClass,
        "jpg": imageIconClass,
        "jpeg": imageIconClass,
        "png": imageIconClass,
        "bmp": imageIconClass,
        "svg": imageIconClass,
        "webp": imageIconClass,
        "avif": imageIconClass,
        "tiff": imageIconClass,
        "eps": imageIconClass,
        "raw": imageIconClass,
        "indd": imageIconClass,
        "ai": imageIconClass,
        "pdf": imageIconClass,
        "psd": imageIconClass,
        "svgz": imageIconClass,
        "webm": imageIconClass,
        "tga": imageIconClass,
        "css": codeIconClass,
        "scss": codeIconClass,
        "sass": codeIconClass,
        "less": codeIconClass,
        "html": codeIconClass,
        "xml": codeIconClass,
        "rss": codeIconClass,
        "yaml": codeIconClass,
        "yml": codeIconClass,
        "toml": codeIconClass,
        "bat": codeIconClass,
        "vb": codeIconClass,
        "asp": codeIconClass,
        "aspx": codeIconClass,
        "jsp": codeIconClass,
        "erb": codeIconClass,
        "jsx": codeIconClass,
        "coffee": codeIconClass,
        "handlebars": codeIconClass,
        "swift": codeIconClass,
        "scala": codeIconClass,
        "rust": codeIconClass,
        "dart": codeIconClass,
        "go": codeIconClass,
        "kotlin": codeIconClass,
        "groovy": codeIconClass,
        "vbnet": codeIconClass,
        "clojure": codeIconClass,
        "lua": codeIconClass,
        "matlab": codeIconClass,
        "fortran": codeIconClass,
        "powershell": codeIconClass,
        "r": codeIconClass,
        "elixir": codeIconClass,
        "csv": codeIconClass,
        "tsv": codeIconClass,
        "rtf": codeIconClass,
        "ods": codeIconClass,
        "odt": codeIconClass,
        "md": codeIconClass,
        "markdown": codeIconClass,
        "txt": codeIconClass,
        "log": codeIconClass,
        "htaccess": codeIconClass,
        "php": codeIconClass,
        "java": codeIconClass,
        "sh": codeIconClass,
        "ini": codeIconClass,
        "cfg": codeIconClass,
        "nfo": codeIconClass,
        "asc": codeIconClass,
        "json": codeIconClass,
        "c": codeIconClass,
        "cpp": codeIconClass,
        "cs": codeIconClass,
        "py": codeIconClass,
        "rb": codeIconClass,
        "pl": codeIconClass,
        "sql": codeIconClass,
        "asm": codeIconClass,
        "ino": codeIconClass,
        "ts": codeIconClass,
        "tsx": codeIconClass,
        "hbs": codeIconClass,
        "config": codeIconClass,
        "twig": codeIconClass,
        "tpl": codeIconClass,
        "gitignore": codeIconClass,
        "rs": codeIconClass,
        "map": codeIconClass,
        "lock": codeIconClass,
        "dtd": codeIconClass,
        "tmp": codeIconClass,
        "top": codeIconClass,
        "bot": codeIconClass,
        "dat": codeIconClass,
        "bak": codeIconClass,
        "htpasswd": codeIconClass,
        "zip": "fa-solid fa-file-archive",
        "tar": "fa-solid fa-file-archive",
        "gz": "fa-solid fa-file-archive",
        "bz2": "fa-solid fa-file-archive",
        "7z": "fa-solid fa-file-archive",
        "rar": "fa-solid fa-file-archive",
        "mp3": "fa-solid fa-file-audio",
        "wav": "fa-solid fa-file-audio",
        "ogg": "fa-solid fa-file-audio",
        "flac": "fa-solid fa-file-audio",
        "aac": "fa-solid fa-file-audio",
        "mp4": "fa-solid fa-file-video",
        "avi": "fa-solid fa-file-video",
        "mkv": "fa-solid fa-file-video",
        "mov": "fa-solid fa-file-video",
        "wmv": "fa-solid fa-file-video",
        "flv": "fa-solid fa-file-video",
        "doc": "fa-solid fa-file-word",
        "docx": "fa-solid fa-file-word",
        "xls": "fa-solid fa-file-excel",
        "xlsx": "fa-solid fa-file-excel",
        "ppt": "fa-solid fa-file-powerpoint",
        "pptx": "fa-solid fa-file-powerpoint"
    };

    const ICON = MIME[EXTENSION] ?? "fa fa-solid fa-file-code";

    return <Icon className={ICON} />;
}

function Icon({ className }) {
    return <i className={className} />
}