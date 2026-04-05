(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Main/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// 1. ISOLATED STATUS SECTION
// Memoized so it doesn't re-run unless necessary
const StatusSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s(()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusSection.useEffect": ()=>{
            const fetchStatus = {
                "StatusSection.useEffect.fetchStatus": ()=>{
                    fetch("https://status.cafe/users/zahryarozi/status.json").then({
                        "StatusSection.useEffect.fetchStatus": (r)=>r.json()
                    }["StatusSection.useEffect.fetchStatus"]).then({
                        "StatusSection.useEffect.fetchStatus": (r)=>{
                            const usernameEl = document.getElementById("statuscafe-username");
                            const contentEl = document.getElementById("statuscafe-content");
                            if (usernameEl && contentEl) {
                                usernameEl.innerHTML = `<a style="color: #C78593; text-decoration:none;" href="https://status.cafe/users/zahryarozi" target="_blank">${r.author}: </a> ${r.timeAgo}`;
                                contentEl.innerHTML = r.content;
                            }
                        }
                    }["StatusSection.useEffect.fetchStatus"]).catch({
                        "StatusSection.useEffect.fetchStatus": (err)=>console.error("Status.cafe failed:", err)
                    }["StatusSection.useEffect.fetchStatus"]);
                }
            }["StatusSection.useEffect.fetchStatus"];
            fetchStatus();
        }
    }["StatusSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-surface-bright border border-white/10 p-6 rounded-[2rem] shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-primary font-headline font-bold mb-4 uppercase tracking-tighter text-xs",
                children: "Current Status"
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "statuscafe",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "statuscafe-username",
                        className: "text-tertiary font-bold text-xs uppercase tracking-widest mb-2"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/Sidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "statuscafe-content",
                        className: "text-zinc-300 italic font-body text-sm leading-relaxed",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/Sidebar.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://status.cafe/current-status.js?name=zahryarozi",
                strategy: "lazyOnload"
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Main/Sidebar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "OD7bBpZva5O2jO+Puf00hKivP7c="));
_c = StatusSection;
StatusSection.displayName = "StatusSection";
// 2. SHARED UI CARD
const Card = ({ title, children, className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-surface-bright border border-white/10 p-6 rounded-[2rem] shadow-lg ${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-primary font-headline font-bold mb-4 uppercase tracking-tighter text-xs",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 42,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Main/Sidebar.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Card;
function Sidebar() {
    _s1();
    // MUSIC PLAYER STATE
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Sync volume safely
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            if (audioRef.current) audioRef.current.volume = volume;
        }
    }["Sidebar.useEffect"], [
        volume
    ]);
    // Robust Toggle Function
    const togglePlay = async ()=>{
        const audio = audioRef.current;
        if (!audio) return;
        try {
            if (audio.paused) {
                // Force a fresh load if we're stuck
                if (audio.readyState === 0) audio.load();
                await audio.play();
                setIsPlaying(true);
            } else {
                audio.pause();
                setIsPlaying(false);
            }
        } catch (err) {
            console.warn("Playback interrupted. Try clicking again.", err);
            setIsPlaying(false);
        }
    };
    const formatTime = (s)=>{
        if (isNaN(s) || !isFinite(s)) return "0:00";
        const mins = Math.floor(s / 60);
        const secs = Math.floor(s % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                rel: "stylesheet"
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusSection, {}, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                title: "Now Playing",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/5 rounded-2xl p-5 border border-white/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                            ref: audioRef,
                            src: "/resources/Main/Audio/louie.mp3",
                            preload: "metadata",
                            onTimeUpdate: ()=>{
                                if (audioRef.current) {
                                    setCurrentTime(audioRef.current.currentTime);
                                    // Double check duration in case metadata was late
                                    if (duration === 0 && audioRef.current.duration > 0) {
                                        setDuration(audioRef.current.duration);
                                    }
                                }
                            },
                            onLoadedMetadata: (e)=>setDuration(e.currentTarget.duration),
                            onPlay: ()=>setIsPlaying(true),
                            onPause: ()=>setIsPlaying(false),
                            onEnded: ()=>setIsPlaying(false)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://t2.genius.com/unsafe/344x344/https%3A%2F%2Fimages.genius.com%2F54d9d91c4a512acf0bcb02e1c2333222.1000x1000x1.png",
                                    alt: "Album",
                                    className: "w-16 h-16 rounded-xl object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-primary font-bold text-sm",
                                            children: "louie. (Preview)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-zinc-500 text-xs font-body",
                                            children: "shteppi"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-white/10 h-1.5 rounded-full mb-2 relative cursor-pointer group",
                            onClick: (e)=>{
                                const rect = e.currentTarget.getBoundingClientRect();
                                if (audioRef.current && duration > 0) {
                                    const pct = (e.clientX - rect.left) / rect.width;
                                    audioRef.current.currentTime = pct * duration;
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-primary h-full rounded-full shadow-[0_0_8px_#FF94B4] relative",
                                style: {
                                    width: `${duration > 0 ? currentTime / duration * 100 : 0}%`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg border border-white/20 scale-100 group-hover:scale-125 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Main/Sidebar.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-[10px] text-zinc-500 font-mono mb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: formatTime(currentTime)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: formatTime(duration)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center gap-8 text-zinc-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-icons cursor-pointer hover:text-primary",
                                            children: "skip_previous"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: togglePlay,
                                            className: "bg-primary text-neutral-dark p-2 rounded-full hover:scale-105 transition-all flex items-center justify-center w-12 h-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "material-icons text-3xl",
                                                children: isPlaying ? 'pause' : 'play_arrow'
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Main/Sidebar.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-icons cursor-pointer hover:text-primary",
                                            children: "skip_next"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "material-icons text-sm text-zinc-500",
                                            children: "volume_up"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "1",
                                            step: "0.01",
                                            value: volume,
                                            onChange: (e)=>setVolume(parseFloat(e.target.value)),
                                            className: "volume-slider-pill flex-1 appearance-none h-1.5 rounded-full bg-white/10 cursor-pointer",
                                            style: {
                                                backgroundImage: `linear-gradient(to right, #FF94B4 ${volume * 100}%, transparent ${volume * 100}%)`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                title: "Blinkers",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                "⚠️ FRICK 'AI' ART!!!! ⚠️",
                                "🍦 I Love Icecream!! 🍦",
                                "▀▄▀▄▀▄ WE SCENE 4EVR ▀▄▀▄▀▄",
                                "🐾 I <3 Cats 🐾",
                                "🩷 Pink! Pink! .... I <3 Pink!! 🩷",
                                "🏳️‍🌈 I Support Gay Rights 🏳️‍🌈",
                                "⦮ ⦯ RAWR RAWR RAWR ⦮ ⦯"
                            ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[11px] text-zinc-300 font-body",
                                    children: g
                                }, g, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/Sidebar.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[2rem] overflow-hidden border border-white/10 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/resources/Main/images/Sidebar/funnimeme1.png",
                    alt: "Funny Meme",
                    className: "w-full h-auto"
                }, void 0, false, {
                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                title: "Music Taste",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3",
                                    children: "Genres"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        "Punk",
                                        "Alternative",
                                        "Breakcore",
                                        "Electronic",
                                        "Electroswing",
                                        "FutureFunk",
                                        "Hyperpop",
                                        "Scenecore",
                                        "UTAU",
                                        "Vocaloid"
                                    ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-white/5 border border-white/5 px-3 py-1 rounded-full text-[11px] text-zinc-300 font-body",
                                            children: g
                                        }, g, false, {
                                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3",
                                    children: "Artists"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        "shteppi",
                                        "South Arcade",
                                        "bbno$",
                                        "m1v",
                                        "Set It Off",
                                        "whatsaheart",
                                        "Vylet Pony",
                                        "MagdalenaBay",
                                        "Osanzi",
                                        "STYXVII"
                                    ].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-secondary/5 border border-secondary/10 px-3 py-1 rounded-full text-[11px] text-secondary font-body",
                                            children: a
                                        }, a, false, {
                                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-surface-bright border border-white/10 rounded-[2rem] shadow-lg overflow-hidden group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/resources/Main/images/Sidebar/TetoMiku.jpg",
                        alt: "Art",
                        className: "w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/Sidebar.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-5 border-t border-white/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-zinc-400 font-bold",
                            children: [
                                "Credits to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://x.com/takawoyu?lang=en",
                                    target: "_blank",
                                    className: "text-secondary hover:underline",
                                    children: "@takawoyu"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 220,
                                    columnNumber: 73
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/Sidebar.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "bg-primary/5 border-primary/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 text-sm italic text-zinc-300 font-body leading-relaxed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: '"Beautiful music is the art of the prophets that can calm the agitations of the soul; it is one of the most magnificent and delightful presents God has given us."'
                        }, void 0, false, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-secondary not-italic font-bold text-[10px] uppercase tracking-tighter",
                            children: "— Martin Luther"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[2rem] overflow-hidden border border-white/10 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/resources/Main/images/Sidebar/kittycathealer.jpg",
                    alt: "Cat",
                    className: "w-full h-auto"
                }, void 0, false, {
                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 text-sm italic text-zinc-300 font-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: '"The worst enemy to creativity is self-doubt."'
                        }, void 0, false, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-secondary not-italic font-bold text-[10px] uppercase tracking-tighter",
                            children: "— Sylvia Plath"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-surface-bright border border-white/10 rounded-[2rem] shadow-lg overflow-hidden group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/resources/Main/images/Sidebar/tetotetobaguette.jpg",
                        alt: "Teto",
                        className: "w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/Sidebar.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-5 border-t border-white/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-zinc-400 font-bold",
                            children: [
                                "Credits to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.pixiv.net/en/artworks/132288828",
                                    className: "text-secondary hover:underline",
                                    children: "Konfleis"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                                    lineNumber: 249,
                                    columnNumber: 73
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/Sidebar.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "bg-secondary/5 border-secondary/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-300 text-sm italic font-body leading-relaxed whitespace-pre-line",
                        children: `You are the petals of the life
            That slowly growing on me
            We could be the king and the queen if you want to
            We could find a getaway if you need to
            I do it all for you
            I do it all of you
            The Sun and the Moon won't know what we'd be up to
            The God is wrong if he won't let me love you
            With all I have
            With all my faith   
          `
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/Sidebar.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-[10px] font-bold text-secondary",
                        children: [
                            "Lyrics from: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.youtube.com/watch?v=S5dKDYX0NSE",
                                className: "underline",
                                children: "Lotus - Galdive"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Main/Sidebar.tsx",
                                lineNumber: 268,
                                columnNumber: 79
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Main/Sidebar.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[2rem] overflow-hidden border border-white/10 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/resources/Main/images/Sidebar/expensivebad.jpeg",
                    alt: "BadFoodButExpensive",
                    className: "w-full h-auto"
                }, void 0, false, {
                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "bg-primary/5 border-primary/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 text-sm italic text-zinc-300 font-body leading-relaxed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: '"You are allowed to disappoint people. You are allowed to be the villain in someone else\'s story. Your only job is to be the hero in your own. "'
                        }, void 0, false, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-secondary not-italic font-bold text-[10px] uppercase tracking-tighter",
                            children: "— Lumierae"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Main/Sidebar.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Main/Sidebar.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Main/Sidebar.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Main/Sidebar.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s1(Sidebar, "yFjdZFI5vLzImaWG4rJfLt0eolI=");
_c2 = Sidebar;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatusSection");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Main/BlogEntry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/html-react-parser/esm/index.mjs [app-client] (ecmascript) <locals>");
;
;
function BlogEntry({ title, date, content }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-surface-bright border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-lg mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center justify-between mb-8 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-headline font-bold text-white tracking-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/BlogEntry.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        className: "text-primary font-bold uppercase tracking-widest text-[10px] bg-primary/10 px-3 py-1 rounded-full",
                        children: date
                    }, void 0, false, {
                        fileName: "[project]/app/components/Main/BlogEntry.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Main/BlogEntry.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-zinc-300 space-y-6 leading-relaxed text-lg font-body",
                children: typeof content === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(content) : ''
            }, void 0, false, {
                fileName: "[project]/app/components/Main/BlogEntry.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 pt-6 border-t border-white/5 text-zinc-500 italic text-sm",
                children: "Written with love by: Zahrya Rozi"
            }, void 0, false, {
                fileName: "[project]/app/components/Main/BlogEntry.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Main/BlogEntry.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = BlogEntry;
var _c;
__turbopack_context__.k.register(_c, "BlogEntry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data/posts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BLOG_POSTS",
    ()=>BLOG_POSTS
]);
const BLOG_POSTS = [
    {
        id: 1,
        title: "✧ So uhh... Welcome! ✧",
        date: "May 16, 2025",
        content: `
      It feels a bit weird to be talking to a <em class="socials">general audience </em>... I mean, as humans, we usually know who we're speaking to, either by meeting them in person or virtual. But this isn't like that, I'm currently speaking to <em class="socials">the void</em>, hoping for someone else to hear my comments and respond back. 
      <span class="emoticons">(𖦹﹏𖦹;)</span>
      I've been working on this <em class="wpcontent">website</em> for a while now, and I'm finally 
      ready to show it to the <em class="socials">Wired</em>. I hope you enjoy your stay here!
      <span class="emoticons">◝(ᵔᵕᵔ)◜</span>
      Anyhow, If you're reading this at the <em class="time">time of publishing</em>, that means that either you stumbled upon my <em class="socials">Discord Description's Link </em> or you just found My <em class="socials">Github Repo</em>, either by chance of curiosity or I showed you... Hewwo!!! How is it? do you like it? <br/>
      This is the <em class="time">first time</em> I made a website seriously and actually thinking things through. After all, I do WANT this website to last all my life as I add or change more and more stuff. I have a lot more planned, as you can see, the <em class="wpcontent">navigation bar</em> still doesn't work. Well, I mean it does, but it takes you to nowhere. I haven't done the other pages still.
      <span class="emoticons">(ᵕ—ᴗ—)/ 모</span>
      There is some <em class="pos">beauty</em> in this, isn't there? Just how the <em class="wpcontent">website</em> didn't exist a moment ago, and now here it is. Slowly developing in something more and more complex and styled...  I don't know, maybe it's just <em class="rlcontent">me</em>
      <br/>
      I'm loosing the topic, so I should stop <em class="time">before I continue</em> Yapping.
      <span class="emoticons">(,,¬﹏¬,,)</span>
      <em class="pos">Thanks for reading!</em> And remember to drink Monster and be positive!
      <span class="emoticons">ヾ( ˃ᴗ˂ )◞ • *✰</span>
    `
    },
    {
        id: 2,
        title: "Second Mayor Website Update!",
        date: "May 17, 2025",
        content: `
      Hello <em class="socials">Wired</em>! This is this <em class="wpcontent">website's Second Mayor Update</em>!
      <span class="emoticons">٩(^ᗜ^ )و ´-</span>
      I'll probably stop celebrating <em class="time">as soon as</em> I find the website is good enough to be fully <em class="socials">shared</em> hehe... Anyway, <em class="socials">y'all</em> have NO IDEA how proud I still am about the <em class="wpcontent">Matsuri's Music Player</em> on the <em class="wpcontent">side bar</em>. It's just, the best thing I've done in here so far. <br/>
      Today it's been fine, <em class="rlcontent">me and my sibling</em> decided it's was <em class="time">time to clean and fix up</em> our <em class="rlcontent">home</em>, so that's what we did. I actually really like how <em class="rlcontent">everything turned out</em>. Have y'all ever felt the air after cleaning? Like it smells really nice, and I'm not referring to the chemicals used to clean, but the smell of air itself. It's just cleaner, fresher, [other adjectives]... <br/>
      All of that cleaning left me really <em class="neg">exhausted</em> tho, my feet DO NOT want to move anymore. On the <em class="pos">bright side</em>, we finished so I can stay on my pc <em class="time">all the time</em> I want! And I'm using it to continue developing this <em class="wpcontent">website</em> more and more! <em class="time">This time</em> I tried adding more things that make it <em class="wpcontent">personal to me</em>.
      <span class="emoticons">(ㅅ' ˘ ') </span>
      Apart from the obvious addition of the <em class="wpcontent">Music Likes to the sidebar</em>, I also added other stuff like <em class="wpcontent">The One Meme</em> (That's the name I came up with, it's staying.) and some <em class="wpcontent"> quotes</em>. <br/>
      I actually just started getting into quotes and poems <em class="time">a month ago</em>, I don't know why tho, I <em class="time">used to</em> hate reading anything longer than 4 paragraphs! <em class="time">Every time</em> I had to read something relatively big, my entire body would just <em class="neg">tense up</em>. But, for some reason, it doesn't <em class="time">anymore</em>.I started to slowly read some things and decided to add some quotes I found on tumblr to the <em class="wpcontent">website</em>.<br/>
      Anyway, I'm gonna go to sleep like right now so...
      <br/>
      <em class="pos">Thanks for reading!</em> And remember to be positive!
    `
    },
    {
        id: 3,
        title: "Third Mayor Website Update!",
        date: "July 2, 2025",
        content: `
      Welcome Back <em class="socials">Wired</em>! This is this <em class="wpcontent">website's Third Mayor Update</em>!
      <span class="emoticons">◝(˶˃ ᵕ ˂˶) ◜♡</span>
      Now okay... I know it took <em class="time">a little bit of time</em>. But it's done! I feel <em class="pos">comfortable</em> with this new version, as I added more <em class="wpcontent">personal stuff</em> (Like the OCs section finally). <em class="time">At the time</em> of writing there are still <em class="neg">some things I have to figure out first</em>, so this update will probably get out <em class="time">a day or so later</em>.<br/>
      I've been <em class="pos">learning more and more</em> about programming in order to make this page <em class="wpcontent">show off more of what I can do!</em> And the fact that for this update I <em class="wpcontent">redesigned it from the first version</em> made it a bit hard to finish. Actually, let me show you the <em>old design</em> from a screenshot of how it started! <br/>
      <img src="/resources/BlogEntries/2025/may16-WebsiteArchive.png">
      <em>Oh boy! It sure does look different!</em>
      <span class="emoticons">( •͈૦•͈ )</span>
      <em class="time">At the beginning</em> I wanted it to look more <em class="wpcontent">old-styled.</em> So I used simple shapes to design the page! <em class="time">But then</em> I thought about it more and I decided I wanted the page to look more like <em class="wpcontent">'me'</em> and, since I really love the <em class="rlcontent">Material You Design by Google</em>, I chose the page to be styled after <em class="rlcontent">MYD</em>. <br/>
      <em class="time">Now</em>, this update also <em class="pos">added new stuff</em>! Like my cherished <em class="wpcontent">BookShelf</em>!! It is something I wanted to do for <em class="time">a long time</em> because, <em class="time">ever since I was a kid</em>, I've always made up a lot of stories in my mind, most of which <em class="neg">got lost to time and I'm trying to remember</em>. <em class="wpcontent">The BookShelf</em> was made so that I don't keep losing track of my stories and I have somewhere to archive (or even showcase) all of them. <br/>
      For this, I decided it would keep the <em>old design</em> in <em class="wpcontent">The BookShelf</em>. I want it to feel as If you're looking to the past through a portal.
      <span class="emoticons">(╭ರ_•́)</span>
      <em class="time">Right now</em>, It's still pretty <em>empty</em>, I <em class="time">need some time</em> to gather all my thoughts and add each character because despite the fact I made a lot of stories, <em class="neg">almost all of them do not have good coherence or relation to each other</em>, which makes it extremely hard to figure out how to connect each. And to be honest, that's not the only thing! <br/>
      <em class="wpcontent">The sidebars...</em> Those sidebars have me all <em class="neg">stressed out</em> just to figure out what to put in each!! It may sound funny but, holy moly!! But anyway, it's all for myself and others to enjoy so. <em class="pos">I will not give up!!</em>
      <span class="emoticons">(≖⩊≖)</span>
      I'm going to release this update feeling a bit more <em class="pos">excited and smart</em>. I really <em class="pos">like</em> how the page is turning out!!<br/>
      <em class="pos">Thanks for reading!</em> And remember to study hard and be positive!
    `
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Main$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Main/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Main$2f$BlogEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Main/BlogEntry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/posts.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    const pfpPath = "/resources/Main/images/zahryarozi.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-6 md:px-12 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-surface-bright border border-white/10 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 mb-12 flex flex-col md:flex-row items-center gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: pfpPath,
                            alt: "Zahrya's PFP",
                            className: "w-full h-full object-cover rounded-[3rem] border-2 border-white/10 shadow-2xl"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-6 text-white",
                                children: [
                                    "Welcome! My name is ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary italic",
                                        children: "Zahrya Rozi"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400 italic text-lg mb-4",
                                children: "\"I'm feelin lost, but on track to a new mind. And my back's to the past, don't be scared for me.\""
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-300 leading-relaxed max-w-2xl text-lg font-body",
                                children: "Another 20yo Wired from the internet!! I'm kinda shy and introverted but friendly (or at least I try to be), plus I'm not used to talking too much."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lg:col-span-4 space-y-8 order-2 lg:order-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Main$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "lg:col-span-8 space-y-8 order-1 lg:order-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOG_POSTS"].map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Main$2f$BlogEntry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: post.title,
                                date: post.date,
                                content: post.content
                            }, post.id, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/script.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (typeof window !== 'undefined') {
        let head = document.head;
        stylesheets.forEach((stylesheet)=>{
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylesheet;
            head.appendChild(link);
        });
    }
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    let { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
    nonce = restProps.nonce || nonce;
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps,
                    nonce
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript({
                ...props,
                nonce
            });
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ])})`
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/script.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/script.js [app-client] (ecmascript)");
}),
"[project]/node_modules/domelementtype/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Types of elements found in htmlparser2's DOM */ __turbopack_context__.s([
    "CDATA",
    ()=>CDATA,
    "Comment",
    ()=>Comment,
    "Directive",
    ()=>Directive,
    "Doctype",
    ()=>Doctype,
    "ElementType",
    ()=>ElementType,
    "Root",
    ()=>Root,
    "Script",
    ()=>Script,
    "Style",
    ()=>Style,
    "Tag",
    ()=>Tag,
    "Text",
    ()=>Text,
    "isTag",
    ()=>isTag
]);
var ElementType;
(function(ElementType) {
    /** Type for the root element of a document */ ElementType["Root"] = "root";
    /** Type for Text */ ElementType["Text"] = "text";
    /** Type for <? ... ?> */ ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType["Comment"] = "comment";
    /** Type for <script> tags */ ElementType["Script"] = "script";
    /** Type for <style> tags */ ElementType["Style"] = "style";
    /** Type for Any tag */ ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag(element) {
    return element.type === ElementType.Tag || element.type === ElementType.Script || element.type === ElementType.Style;
}
const Root = ElementType.Root;
const Text = ElementType.Text;
const Directive = ElementType.Directive;
const Comment = ElementType.Comment;
const Script = ElementType.Script;
const Style = ElementType.Style;
const Tag = ElementType.Tag;
const CDATA = ElementType.CDATA;
const Doctype = ElementType.Doctype;
}),
"[project]/node_modules/domhandler/dist/node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CDATA",
    ()=>CDATA,
    "Comment",
    ()=>Comment,
    "DataNode",
    ()=>DataNode,
    "Document",
    ()=>Document,
    "Element",
    ()=>Element,
    "Node",
    ()=>Node,
    "NodeWithChildren",
    ()=>NodeWithChildren,
    "ProcessingInstruction",
    ()=>ProcessingInstruction,
    "Text",
    ()=>Text,
    "cloneNode",
    ()=>cloneNode,
    "hasChildren",
    ()=>hasChildren,
    "isCDATA",
    ()=>isCDATA,
    "isComment",
    ()=>isComment,
    "isDirective",
    ()=>isDirective,
    "isDocument",
    ()=>isDocument,
    "isTag",
    ()=>isTag,
    "isText",
    ()=>isText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/dist/index.js [app-client] (ecmascript)");
;
class Node {
    /** Parent of the node */ parent = null;
    /** Previous sibling */ prev = null;
    /** Next sibling */ next = null;
    /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ startIndex = null;
    /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ endIndex = null;
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get previousSibling() {
        return this.prev;
    }
    set previousSibling(previous) {
        this.prev = previous;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
}
class DataNode extends Node {
    data;
    /**
     * @param data The content of the data node
     */ constructor(data){
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
class Text extends DataNode {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Text;
    get nodeType() {
        return 3;
    }
}
class Comment extends DataNode {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Comment;
    get nodeType() {
        return 8;
    }
}
class ProcessingInstruction extends DataNode {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Directive;
    name;
    constructor(name, data){
        super(data);
        this.name = name;
    }
    get nodeType() {
        return 1;
    }
    /** If this is a doctype, the document type name (parse5 only). */ "x-name";
    /** If this is a doctype, the document type public identifier (parse5 only). */ "x-publicId";
    /** If this is a doctype, the document type system identifier (parse5 only). */ "x-systemId";
}
class NodeWithChildren extends Node {
    children;
    /**
     * @param children Children of the node. Only certain node types can have children.
     */ constructor(children){
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */ get firstChild() {
        return this.children[0] ?? null;
    }
    /** Last child of the node. */ get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
class CDATA extends NodeWithChildren {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
    get nodeType() {
        return 4;
    }
}
class Document extends NodeWithChildren {
    type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Root;
    get nodeType() {
        return 9;
    }
}
class Element extends NodeWithChildren {
    name;
    attribs;
    type;
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     * @param type Node type used for the new node instance.
     */ constructor(name, attribs, children = [], type = name === "script" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Script : name === "style" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Style : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Tag){
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name)=>({
                name,
                value: this.attribs[name],
                namespace: this["x-attribsNamespace"]?.[name],
                prefix: this["x-attribsPrefix"]?.[name]
            }));
    }
    /** Element namespace (parse5 only). */ namespace;
    /** Element attribute namespaces (parse5 only). */ "x-attribsNamespace";
    /** Element attribute namespace-related prefixes (parse5 only). */ "x-attribsPrefix";
}
function isTag(node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTag"])(node);
}
function isCDATA(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
}
function isText(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Text;
}
function isComment(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Comment;
}
function isDirective(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Directive;
}
function isDocument(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Root;
}
function hasChildren(node) {
    return Object.hasOwn(node, "children");
}
function cloneNode(node, recursive = false) {
    let result;
    if (isText(node)) {
        result = new Text(node.data);
    } else if (isComment(node)) {
        result = new Comment(node.data);
    } else if (isTag(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element(node.name, {
            ...node.attribs
        }, children);
        for (const child of children){
            child.parent = clone;
        }
        if (node.namespace != null) {
            clone.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone["x-attribsNamespace"] = {
                ...node["x-attribsNamespace"]
            };
        }
        if (node["x-attribsPrefix"]) {
            clone["x-attribsPrefix"] = {
                ...node["x-attribsPrefix"]
            };
        }
        result = clone;
    } else if (isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new CDATA(children);
        for (const child of children){
            child.parent = clone;
        }
        result = clone;
    } else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document(children);
        for (const child of children){
            child.parent = clone;
        }
        if (node["x-mode"]) {
            clone["x-mode"] = node["x-mode"];
        }
        result = clone;
    } else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else {
        throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
/**
 * Clone a list of child nodes.
 * @param childs The child nodes to clone.
 * @returns A list of cloned child nodes.
 */ function cloneChildren(childs) {
    const children = childs.map((child)=>cloneNode(child, true));
    for(let index = 1; index < children.length; index++){
        children[index].prev = children[index - 1];
        children[index - 1].next = children[index];
    }
    return children;
}
}),
"[project]/node_modules/domhandler/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DomHandler",
    ()=>DomHandler,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/node.js [app-client] (ecmascript)");
;
;
;
// Default options
const defaultOptions = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
class DomHandler {
    /** The elements of the DOM */ dom = [];
    /** The root element for the DOM */ root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"](this.dom);
    /** Called once parsing has completed. */ callback;
    /** Settings for the handler. */ options;
    /** Callback whenever a tag is closed. */ elementCB;
    /** Indicated whether parsing has been completed. */ done = false;
    /** Stack of open tags. */ tagStack = [
        this.root
    ];
    /** A data node that is still being written to. */ lastNode = null;
    /** Reference to the parser instance. Used for location information. */ parser = null;
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ constructor(callback, options, elementCB){
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOptions;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback ?? null;
        this.options = options ?? defaultOptions;
        this.elementCB = elementCB ?? null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"](this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const element = this.tagStack.pop();
        if (this.options.withEndIndices && this.parser) {
            element.endIndex = this.parser.endIndex;
        }
        if (this.elementCB) this.elementCB(element);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Tag : undefined;
        const element = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"](name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Text) {
            lastNode.data += data;
            if (this.options.withEndIndices && this.parser) {
                lastNode.endIndex = this.parser.endIndex;
            }
        } else {
            const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"](data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementType"].Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment"](data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"]("");
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CDATA"]([
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessingInstruction"](name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        } else if (error) {
            throw error;
        }
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices && this.parser) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices && this.parser) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}
const __TURBOPACK__default__export__ = DomHandler;
}),
"[project]/node_modules/domhandler/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CDATA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CDATA"],
    "Comment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment"],
    "DataNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataNode"],
    "Document",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"],
    "DomHandler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"],
    "Element",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Element"],
    "Node",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"],
    "NodeWithChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeWithChildren"],
    "ProcessingInstruction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProcessingInstruction"],
    "Text",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"],
    "cloneNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneNode"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "hasChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChildren"],
    "isCDATA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCDATA"],
    "isComment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isComment"],
    "isDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDirective"],
    "isDocument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDocument"],
    "isTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTag"],
    "isText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isText"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$dist$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/dist/node.js [app-client] (ecmascript)");
}),
"[project]/node_modules/html-dom-parser/lib/client/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES = void 0;
/**
 * SVG elements are case-sensitive.
 *
 * @see https://developer.mozilla.org/docs/Web/SVG/Element#svg_elements_a_to_z
 */ exports.CASE_SENSITIVE_TAG_NAMES = [
    'animateMotion',
    'animateTransform',
    'clipPath',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'foreignObject',
    'linearGradient',
    'radialGradient',
    'textPath'
];
exports.CASE_SENSITIVE_TAG_NAMES_MAP = exports.CASE_SENSITIVE_TAG_NAMES.reduce(function(accumulator, tagName) {
    accumulator[tagName.toLowerCase()] = tagName;
    return accumulator;
}, {});
}),
"[project]/node_modules/html-dom-parser/lib/client/utilities.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasOpenTag = hasOpenTag;
exports.escapeSpecialCharacters = escapeSpecialCharacters;
exports.revertEscapedCharacters = revertEscapedCharacters;
exports.formatDOM = formatDOM;
var domhandler_1 = __turbopack_context__.r("[project]/node_modules/domhandler/dist/index.js [app-client] (ecmascript)");
var constants_1 = __turbopack_context__.r("[project]/node_modules/html-dom-parser/lib/client/constants.js [app-client] (ecmascript)");
var CARRIAGE_RETURN = '\r';
var CARRIAGE_RETURN_REGEX = new RegExp(CARRIAGE_RETURN, 'g');
var CARRIAGE_RETURN_PLACEHOLDER = "__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now().toString(), "__");
var CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(CARRIAGE_RETURN_PLACEHOLDER, 'g');
/**
 * Gets case-sensitive tag name.
 *
 * @param tagName - Tag name in lowercase.
 * @returns - Case-sensitive tag name.
 */ function getCaseSensitiveTagName(tagName) {
    return constants_1.CASE_SENSITIVE_TAG_NAMES_MAP[tagName];
}
/**
 * Formats DOM attributes to a hash map.
 *
 * @param attributes - List of attributes.
 * @returns - Map of attribute name to value.
 */ function formatAttributes(attributes) {
    var map = {};
    var index = 0;
    var attributesLength = attributes.length;
    // `NamedNodeMap` is array-like
    for(; index < attributesLength; index++){
        var attribute = attributes[index];
        map[attribute.name] = attribute.value;
    }
    return map;
}
/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param tagName - Lowercase tag name.
 * @returns - Formatted tag name.
 */ function formatTagName(tagName) {
    tagName = tagName.toLowerCase();
    var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
    if (caseSensitiveTagName) {
        return caseSensitiveTagName;
    }
    return tagName;
}
/**
 * Checks if an HTML string contains an opening tag (case-insensitive).
 *
 * @param html - HTML string.
 * @param tagName - Tag name to search for (e.g., 'head' or 'body').
 * @returns - Whether the tag is found.
 */ function hasOpenTag(html, tagName) {
    var openTag = '<' + tagName;
    var index = html.toLowerCase().indexOf(openTag);
    if (index === -1) {
        return false;
    }
    var char = html[index + openTag.length];
    // the character after the tag name must be '>' or whitespace (for attributes)
    return char === '>' || char === ' ' || char === '\t' || char === '\n' || char === '\r' || char === '/';
}
/**
 * Escapes special characters before parsing.
 *
 * @param html - The HTML string.
 * @returns - HTML string with escaped special characters.
 */ function escapeSpecialCharacters(html) {
    return html.replace(CARRIAGE_RETURN_REGEX, CARRIAGE_RETURN_PLACEHOLDER);
}
/**
 * Reverts escaped special characters back to actual characters.
 *
 * @param text - The text with escaped characters.
 * @returns - Text with escaped characters reverted.
 */ function revertEscapedCharacters(text) {
    return text.replace(CARRIAGE_RETURN_PLACEHOLDER_REGEX, CARRIAGE_RETURN);
}
/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param nodes - DOM nodes.
 * @param parent - Parent node.
 * @param directive - Directive.
 * @returns - Nodes.
 */ function formatDOM(nodes, parent, directive) {
    var _a, _b, _c, _d;
    if (parent === void 0) {
        parent = null;
    }
    var domNodes = [];
    var current;
    var index = 0;
    var nodesLength = nodes.length;
    for(; index < nodesLength; index++){
        var node = nodes[index];
        // set the node data given the type
        switch(node.nodeType){
            case 1:
                {
                    var tagName = formatTagName(node.nodeName);
                    // script, style, or tag
                    current = new domhandler_1.Element(tagName, formatAttributes(node.attributes));
                    current.children = formatDOM(// template children are on content
                    tagName === 'template' ? node.content.childNodes : node.childNodes, current);
                    break;
                }
            /* v8 ignore start */ case 3:
                current = new domhandler_1.Text(revertEscapedCharacters((_a = node.nodeValue) !== null && _a !== void 0 ? _a : ''));
                break;
            case 8:
                current = new domhandler_1.Comment((_b = node.nodeValue) !== null && _b !== void 0 ? _b : '');
                break;
            /* v8 ignore stop */ default:
                continue;
        }
        // set previous node next
        var prev = (_c = domNodes[index - 1]) !== null && _c !== void 0 ? _c : null;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (prev) {
            prev.next = current;
        }
        // set properties for current node
        current.parent = parent;
        current.prev = prev;
        current.next = null;
        domNodes.push(current);
    }
    if (directive) {
        current = new domhandler_1.ProcessingInstruction(directive.substring(0, directive.indexOf(' ')).toLowerCase(), directive);
        current.next = (_d = domNodes[0]) !== null && _d !== void 0 ? _d : null;
        current.parent = parent;
        domNodes.unshift(current);
        if (domNodes[1]) {
            domNodes[1].prev = domNodes[0];
        }
    }
    return domNodes;
}
}),
"[project]/node_modules/html-dom-parser/lib/client/domparser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = domparser;
var utilities_1 = __turbopack_context__.r("[project]/node_modules/html-dom-parser/lib/client/utilities.js [app-client] (ecmascript)");
// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
// falls back to `parseFromString` if `createHTMLDocument` cannot be used
/* eslint-disable @typescript-eslint/no-unused-vars */ /* v8 ignore start */ var parseFromDocument = function(html, tagName) {
    throw new Error('This browser does not support `document.implementation.createHTMLDocument`');
};
var parseFromString = function(html, tagName) {
    throw new Error('This browser does not support `DOMParser.prototype.parseFromString`');
};
var DOMParser = typeof window === 'object' && window.DOMParser;
/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */ if (typeof DOMParser === 'function') {
    var domParser_1 = new DOMParser();
    var mimeType_1 = 'text/html';
    /**
     * Creates an HTML document using `DOMParser.parseFromString`.
     *
     * @param html - The HTML string.
     * @param tagName - The element to render the HTML (with 'body' as fallback).
     * @returns - Document.
     */ parseFromString = function(html, tagName) {
        if (tagName) {
            html = "<".concat(tagName, ">").concat(html, "</").concat(tagName, ">");
        }
        return domParser_1.parseFromString(html, mimeType_1);
    };
    parseFromDocument = parseFromString;
}
/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */ // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (typeof document === 'object' && document.implementation) {
    var htmlDocument_1 = document.implementation.createHTMLDocument();
    /**
     * Use HTML document created by `document.implementation.createHTMLDocument`.
     *
     * @param html - The HTML string.
     * @param tagName - The element to render the HTML (with 'body' as fallback).
     * @returns - Document
     */ parseFromDocument = function(html, tagName) {
        if (tagName) {
            var element = htmlDocument_1.documentElement.querySelector(tagName);
            if (element) {
                element.innerHTML = html;
            }
            return htmlDocument_1;
        }
        htmlDocument_1.documentElement.innerHTML = html;
        return htmlDocument_1;
    };
}
/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */ var template = typeof document === 'object' && document.createElement('template');
var parseFromTemplate;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (template && template.content) {
    /**
     * Uses a template element (content fragment) to parse HTML.
     *
     * @param html - HTML string.
     * @returns - Nodes.
     */ parseFromTemplate = function(html) {
        template.innerHTML = html;
        return template.content.childNodes;
    };
}
var createNodeList = function() {
    return document.createDocumentFragment().childNodes;
};
/* v8 ignore stop */ /**
 * Parses HTML string to DOM nodes.
 *
 * @param html - HTML markup.
 * @returns - DOM nodes.
 */ function domparser(html) {
    var _a, _b, _c, _d, _e, _f;
    // Escape special characters before parsing
    html = (0, utilities_1.escapeSpecialCharacters)(html);
    var match = FIRST_TAG_REGEX.exec(html);
    var firstTagName = (_a = match === null || match === void 0 ? void 0 : match[1]) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    switch(firstTagName){
        case HTML:
            {
                var doc = parseFromString(html);
                // the created document may come with filler head/body elements,
                // so make sure to remove them if they don't actually exist
                if (!(0, utilities_1.hasOpenTag)(html, HEAD)) {
                    var element = doc.querySelector(HEAD);
                    (_b = element === null || element === void 0 ? void 0 : element.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(element);
                }
                if (!(0, utilities_1.hasOpenTag)(html, BODY)) {
                    var element = doc.querySelector(BODY);
                    (_c = element === null || element === void 0 ? void 0 : element.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(element);
                }
                return doc.querySelectorAll(HTML);
            }
        case HEAD:
        case BODY:
            {
                var elements = parseFromDocument(html).querySelectorAll(firstTagName);
                // if there's a sibling element, then return both elements
                /* v8 ignore next */ if ((0, utilities_1.hasOpenTag)(html, BODY) && (0, utilities_1.hasOpenTag)(html, HEAD)) {
                    return (_e = (_d = elements[0].parentNode) === null || _d === void 0 ? void 0 : _d.childNodes) !== null && _e !== void 0 ? _e : createNodeList();
                }
                return elements;
            }
        // low-level tag or text
        /* v8 ignore start */ default:
            {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                if (parseFromTemplate) {
                    return parseFromTemplate(html);
                }
                var element = parseFromDocument(html, BODY).querySelector(BODY);
                return (_f = element === null || element === void 0 ? void 0 : element.childNodes) !== null && _f !== void 0 ? _f : createNodeList();
            }
    }
}
}),
"[project]/node_modules/html-dom-parser/lib/client/html-to-dom.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = HTMLDOMParser;
var domparser_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/html-dom-parser/lib/client/domparser.js [app-client] (ecmascript)"));
var utilities_1 = __turbopack_context__.r("[project]/node_modules/html-dom-parser/lib/client/utilities.js [app-client] (ecmascript)");
var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>
/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param html - HTML markup.
 * @returns - DOM elements.
 */ function HTMLDOMParser(html) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    // match directive
    var match = DIRECTIVE_REGEX.exec(html);
    var directive = match ? match[1] : undefined;
    return (0, utilities_1.formatDOM)((0, domparser_1.default)(html), null, directive);
}
}),
"[project]/node_modules/react-property/lib/possibleStandardNamesOptimized.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;
// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;
exports.possibleStandardNames = {
    accept: 0,
    acceptCharset: 1,
    'accept-charset': 'acceptCharset',
    accessKey: 1,
    action: 0,
    allowFullScreen: 1,
    alt: 0,
    as: 0,
    async: 0,
    autoCapitalize: 1,
    autoComplete: 1,
    autoCorrect: 1,
    autoFocus: 1,
    autoPlay: 1,
    autoSave: 1,
    capture: 0,
    cellPadding: 1,
    cellSpacing: 1,
    challenge: 0,
    charSet: 1,
    checked: 0,
    children: 0,
    cite: 0,
    class: 'className',
    classID: 1,
    className: 1,
    cols: 0,
    colSpan: 1,
    content: 0,
    contentEditable: 1,
    contextMenu: 1,
    controls: 0,
    controlsList: 1,
    coords: 0,
    crossOrigin: 1,
    dangerouslySetInnerHTML: 1,
    data: 0,
    dateTime: 1,
    default: 0,
    defaultChecked: 1,
    defaultValue: 1,
    defer: 0,
    dir: 0,
    disabled: 0,
    disablePictureInPicture: 1,
    disableRemotePlayback: 1,
    download: 0,
    draggable: 0,
    encType: 1,
    enterKeyHint: 1,
    for: 'htmlFor',
    form: 0,
    formMethod: 1,
    formAction: 1,
    formEncType: 1,
    formNoValidate: 1,
    formTarget: 1,
    frameBorder: 1,
    headers: 0,
    height: 0,
    hidden: 0,
    high: 0,
    href: 0,
    hrefLang: 1,
    htmlFor: 1,
    httpEquiv: 1,
    'http-equiv': 'httpEquiv',
    icon: 0,
    id: 0,
    innerHTML: 1,
    inputMode: 1,
    integrity: 0,
    is: 0,
    itemID: 1,
    itemProp: 1,
    itemRef: 1,
    itemScope: 1,
    itemType: 1,
    keyParams: 1,
    keyType: 1,
    kind: 0,
    label: 0,
    lang: 0,
    list: 0,
    loop: 0,
    low: 0,
    manifest: 0,
    marginWidth: 1,
    marginHeight: 1,
    max: 0,
    maxLength: 1,
    media: 0,
    mediaGroup: 1,
    method: 0,
    min: 0,
    minLength: 1,
    multiple: 0,
    muted: 0,
    name: 0,
    noModule: 1,
    nonce: 0,
    noValidate: 1,
    open: 0,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: 1,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 1,
    readOnly: 1,
    referrerPolicy: 1,
    rel: 0,
    required: 0,
    reversed: 0,
    role: 0,
    rows: 0,
    rowSpan: 1,
    sandbox: 0,
    scope: 0,
    scoped: 0,
    scrolling: 0,
    seamless: 0,
    selected: 0,
    shape: 0,
    size: 0,
    sizes: 0,
    span: 0,
    spellCheck: 1,
    src: 0,
    srcDoc: 1,
    srcLang: 1,
    srcSet: 1,
    start: 0,
    step: 0,
    style: 0,
    summary: 0,
    tabIndex: 1,
    target: 0,
    title: 0,
    type: 0,
    useMap: 1,
    value: 0,
    width: 0,
    wmode: 0,
    wrap: 0,
    about: 0,
    accentHeight: 1,
    'accent-height': 'accentHeight',
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 1,
    'alignment-baseline': 'alignmentBaseline',
    allowReorder: 1,
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 1,
    'arabic-form': 'arabicForm',
    ascent: 0,
    attributeName: 1,
    attributeType: 1,
    autoReverse: 1,
    azimuth: 0,
    baseFrequency: 1,
    baselineShift: 1,
    'baseline-shift': 'baselineShift',
    baseProfile: 1,
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 1,
    capHeight: 1,
    'cap-height': 'capHeight',
    clip: 0,
    clipPath: 1,
    'clip-path': 'clipPath',
    clipPathUnits: 1,
    clipRule: 1,
    'clip-rule': 'clipRule',
    color: 0,
    colorInterpolation: 1,
    'color-interpolation': 'colorInterpolation',
    colorInterpolationFilters: 1,
    'color-interpolation-filters': 'colorInterpolationFilters',
    colorProfile: 1,
    'color-profile': 'colorProfile',
    colorRendering: 1,
    'color-rendering': 'colorRendering',
    contentScriptType: 1,
    contentStyleType: 1,
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    datatype: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 1,
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 1,
    'dominant-baseline': 'dominantBaseline',
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 1,
    elevation: 0,
    enableBackground: 1,
    'enable-background': 'enableBackground',
    end: 0,
    exponent: 0,
    externalResourcesRequired: 1,
    fill: 0,
    fillOpacity: 1,
    'fill-opacity': 'fillOpacity',
    fillRule: 1,
    'fill-rule': 'fillRule',
    filter: 0,
    filterRes: 1,
    filterUnits: 1,
    floodOpacity: 1,
    'flood-opacity': 'floodOpacity',
    floodColor: 1,
    'flood-color': 'floodColor',
    focusable: 0,
    fontFamily: 1,
    'font-family': 'fontFamily',
    fontSize: 1,
    'font-size': 'fontSize',
    fontSizeAdjust: 1,
    'font-size-adjust': 'fontSizeAdjust',
    fontStretch: 1,
    'font-stretch': 'fontStretch',
    fontStyle: 1,
    'font-style': 'fontStyle',
    fontVariant: 1,
    'font-variant': 'fontVariant',
    fontWeight: 1,
    'font-weight': 'fontWeight',
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 1,
    'glyph-name': 'glyphName',
    glyphOrientationHorizontal: 1,
    'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
    glyphOrientationVertical: 1,
    'glyph-orientation-vertical': 'glyphOrientationVertical',
    glyphRef: 1,
    gradientTransform: 1,
    gradientUnits: 1,
    hanging: 0,
    horizAdvX: 1,
    'horiz-adv-x': 'horizAdvX',
    horizOriginX: 1,
    'horiz-origin-x': 'horizOriginX',
    ideographic: 0,
    imageRendering: 1,
    'image-rendering': 'imageRendering',
    in2: 0,
    in: 0,
    inlist: 0,
    intercept: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    k: 0,
    kernelMatrix: 1,
    kernelUnitLength: 1,
    kerning: 0,
    keyPoints: 1,
    keySplines: 1,
    keyTimes: 1,
    lengthAdjust: 1,
    letterSpacing: 1,
    'letter-spacing': 'letterSpacing',
    lightingColor: 1,
    'lighting-color': 'lightingColor',
    limitingConeAngle: 1,
    local: 0,
    markerEnd: 1,
    'marker-end': 'markerEnd',
    markerHeight: 1,
    markerMid: 1,
    'marker-mid': 'markerMid',
    markerStart: 1,
    'marker-start': 'markerStart',
    markerUnits: 1,
    markerWidth: 1,
    mask: 0,
    maskContentUnits: 1,
    maskUnits: 1,
    mathematical: 0,
    mode: 0,
    numOctaves: 1,
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 1,
    'overline-position': 'overlinePosition',
    overlineThickness: 1,
    'overline-thickness': 'overlineThickness',
    paintOrder: 1,
    'paint-order': 'paintOrder',
    panose1: 0,
    'panose-1': 'panose1',
    pathLength: 1,
    patternContentUnits: 1,
    patternTransform: 1,
    patternUnits: 1,
    pointerEvents: 1,
    'pointer-events': 'pointerEvents',
    points: 0,
    pointsAtX: 1,
    pointsAtY: 1,
    pointsAtZ: 1,
    prefix: 0,
    preserveAlpha: 1,
    preserveAspectRatio: 1,
    primitiveUnits: 1,
    property: 0,
    r: 0,
    radius: 0,
    refX: 1,
    refY: 1,
    renderingIntent: 1,
    'rendering-intent': 'renderingIntent',
    repeatCount: 1,
    repeatDur: 1,
    requiredExtensions: 1,
    requiredFeatures: 1,
    resource: 0,
    restart: 0,
    result: 0,
    results: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    security: 0,
    seed: 0,
    shapeRendering: 1,
    'shape-rendering': 'shapeRendering',
    slope: 0,
    spacing: 0,
    specularConstant: 1,
    specularExponent: 1,
    speed: 0,
    spreadMethod: 1,
    startOffset: 1,
    stdDeviation: 1,
    stemh: 0,
    stemv: 0,
    stitchTiles: 1,
    stopColor: 1,
    'stop-color': 'stopColor',
    stopOpacity: 1,
    'stop-opacity': 'stopOpacity',
    strikethroughPosition: 1,
    'strikethrough-position': 'strikethroughPosition',
    strikethroughThickness: 1,
    'strikethrough-thickness': 'strikethroughThickness',
    string: 0,
    stroke: 0,
    strokeDasharray: 1,
    'stroke-dasharray': 'strokeDasharray',
    strokeDashoffset: 1,
    'stroke-dashoffset': 'strokeDashoffset',
    strokeLinecap: 1,
    'stroke-linecap': 'strokeLinecap',
    strokeLinejoin: 1,
    'stroke-linejoin': 'strokeLinejoin',
    strokeMiterlimit: 1,
    'stroke-miterlimit': 'strokeMiterlimit',
    strokeWidth: 1,
    'stroke-width': 'strokeWidth',
    strokeOpacity: 1,
    'stroke-opacity': 'strokeOpacity',
    suppressContentEditableWarning: 1,
    suppressHydrationWarning: 1,
    surfaceScale: 1,
    systemLanguage: 1,
    tableValues: 1,
    targetX: 1,
    targetY: 1,
    textAnchor: 1,
    'text-anchor': 'textAnchor',
    textDecoration: 1,
    'text-decoration': 'textDecoration',
    textLength: 1,
    textRendering: 1,
    'text-rendering': 'textRendering',
    to: 0,
    transform: 0,
    typeof: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 1,
    'underline-position': 'underlinePosition',
    underlineThickness: 1,
    'underline-thickness': 'underlineThickness',
    unicode: 0,
    unicodeBidi: 1,
    'unicode-bidi': 'unicodeBidi',
    unicodeRange: 1,
    'unicode-range': 'unicodeRange',
    unitsPerEm: 1,
    'units-per-em': 'unitsPerEm',
    unselectable: 0,
    vAlphabetic: 1,
    'v-alphabetic': 'vAlphabetic',
    values: 0,
    vectorEffect: 1,
    'vector-effect': 'vectorEffect',
    version: 0,
    vertAdvY: 1,
    'vert-adv-y': 'vertAdvY',
    vertOriginX: 1,
    'vert-origin-x': 'vertOriginX',
    vertOriginY: 1,
    'vert-origin-y': 'vertOriginY',
    vHanging: 1,
    'v-hanging': 'vHanging',
    vIdeographic: 1,
    'v-ideographic': 'vIdeographic',
    viewBox: 1,
    viewTarget: 1,
    visibility: 0,
    vMathematical: 1,
    'v-mathematical': 'vMathematical',
    vocab: 0,
    widths: 0,
    wordSpacing: 1,
    'word-spacing': 'wordSpacing',
    writingMode: 1,
    'writing-mode': 'writingMode',
    x1: 0,
    x2: 0,
    x: 0,
    xChannelSelector: 1,
    xHeight: 1,
    'x-height': 'xHeight',
    xlinkActuate: 1,
    'xlink:actuate': 'xlinkActuate',
    xlinkArcrole: 1,
    'xlink:arcrole': 'xlinkArcrole',
    xlinkHref: 1,
    'xlink:href': 'xlinkHref',
    xlinkRole: 1,
    'xlink:role': 'xlinkRole',
    xlinkShow: 1,
    'xlink:show': 'xlinkShow',
    xlinkTitle: 1,
    'xlink:title': 'xlinkTitle',
    xlinkType: 1,
    'xlink:type': 'xlinkType',
    xmlBase: 1,
    'xml:base': 'xmlBase',
    xmlLang: 1,
    'xml:lang': 'xmlLang',
    xmlns: 0,
    'xml:space': 'xmlSpace',
    xmlnsXlink: 1,
    'xmlns:xlink': 'xmlnsXlink',
    xmlSpace: 1,
    y1: 0,
    y2: 0,
    y: 0,
    yChannelSelector: 1,
    z: 0,
    zoomAndPan: 1
};
}),
"[project]/node_modules/react-property/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */ // A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
const RESERVED = 0;
// A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.
const STRING = 1;
// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
const BOOLEANISH_STRING = 2;
// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
const BOOLEAN = 3;
// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
const OVERLOADED_BOOLEAN = 4;
// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
const NUMERIC = 5;
// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
const POSITIVE_NUMERIC = 6;
function getPropertyInfo(name) {
    return properties.hasOwnProperty(name) ? properties[name] : null;
}
function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
    this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
    this.attributeName = attributeName;
    this.attributeNamespace = attributeNamespace;
    this.mustUseProperty = mustUseProperty;
    this.propertyName = name;
    this.type = type;
    this.sanitizeURL = sanitizeURL;
    this.removeEmptyString = removeEmptyString;
}
// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
const properties = {};
// These props are reserved by React. They shouldn't be written to the DOM.
const reservedProps = [
    'children',
    'dangerouslySetInnerHTML',
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    'defaultValue',
    'defaultChecked',
    'innerHTML',
    'suppressContentEditableWarning',
    'suppressHydrationWarning',
    'style'
];
reservedProps.forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
});
// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[
    [
        'acceptCharset',
        'accept-charset'
    ],
    [
        'className',
        'class'
    ],
    [
        'htmlFor',
        'for'
    ],
    [
        'httpEquiv',
        'http-equiv'
    ]
].forEach(([name, attributeName])=>{
    properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
});
// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
[
    'contentEditable',
    'draggable',
    'spellCheck',
    'value'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
});
// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
});
// These are HTML boolean attributes.
[
    'allowFullScreen',
    'async',
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    'autoFocus',
    'autoPlay',
    'controls',
    'default',
    'defer',
    'disabled',
    'disablePictureInPicture',
    'disableRemotePlayback',
    'formNoValidate',
    'hidden',
    'loop',
    'noModule',
    'noValidate',
    'open',
    'playsInline',
    'readOnly',
    'required',
    'reversed',
    'scoped',
    'seamless',
    // Microdata
    'itemScope'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
});
// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
[
    'checked',
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    'multiple',
    'muted',
    'selected'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
});
// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
[
    'capture',
    'download'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
});
// These are HTML attributes that must be positive numbers.
[
    'cols',
    'rows',
    'size',
    'span'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
});
// These are HTML attributes that must be numbers.
[
    'rowSpan',
    'start'
].forEach((name)=>{
    properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
});
const CAMELIZE = /[\-\:]([a-z])/g;
const capitalize = (token)=>token[1].toUpperCase();
// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
[
    'accent-height',
    'alignment-baseline',
    'arabic-form',
    'baseline-shift',
    'cap-height',
    'clip-path',
    'clip-rule',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'dominant-baseline',
    'enable-background',
    'fill-opacity',
    'fill-rule',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'glyph-name',
    'glyph-orientation-horizontal',
    'glyph-orientation-vertical',
    'horiz-adv-x',
    'horiz-origin-x',
    'image-rendering',
    'letter-spacing',
    'lighting-color',
    'marker-end',
    'marker-mid',
    'marker-start',
    'overline-position',
    'overline-thickness',
    'paint-order',
    'panose-1',
    'pointer-events',
    'rendering-intent',
    'shape-rendering',
    'stop-color',
    'stop-opacity',
    'strikethrough-position',
    'strikethrough-thickness',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'underline-position',
    'underline-thickness',
    'unicode-bidi',
    'unicode-range',
    'units-per-em',
    'v-alphabetic',
    'v-hanging',
    'v-ideographic',
    'v-mathematical',
    'vector-effect',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'word-spacing',
    'writing-mode',
    'xmlns:xlink',
    'x-height'
].forEach((attributeName)=>{
    const name = attributeName.replace(CAMELIZE, capitalize);
    properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
});
// String SVG attributes with the xlink namespace.
[
    'xlink:actuate',
    'xlink:arcrole',
    'xlink:role',
    'xlink:show',
    'xlink:title',
    'xlink:type'
].forEach((attributeName)=>{
    const name = attributeName.replace(CAMELIZE, capitalize);
    properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/1999/xlink', false, false);
});
// String SVG attributes with the xml namespace.
[
    'xml:base',
    'xml:lang',
    'xml:space'
].forEach((attributeName)=>{
    const name = attributeName.replace(CAMELIZE, capitalize);
    properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, 'http://www.w3.org/XML/1998/namespace', false, false);
});
// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
[
    'tabIndex',
    'crossOrigin'
].forEach((attributeName)=>{
    properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
});
// These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.
const xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, 'xlink:href', 'http://www.w3.org/1999/xlink', true, false);
[
    'src',
    'href',
    'action',
    'formAction'
].forEach((attributeName)=>{
    properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
});
// 
const { CAMELCASE, SAME, possibleStandardNames: possibleStandardNamesOptimized } = __turbopack_context__.r("[project]/node_modules/react-property/lib/possibleStandardNamesOptimized.js [app-client] (ecmascript)");
const ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
/**
 * Checks whether a property name is a custom attribute.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25
 *
 * @type {(attribute: string) => boolean}
 */ const isCustomAttribute = RegExp.prototype.test.bind(// eslint-disable-next-line no-misleading-character-class
new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
/**
 * @type {Record<string, string>}
 */ const possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce((accumulator, standardName)=>{
    const propName = possibleStandardNamesOptimized[standardName];
    if (propName === SAME) {
        accumulator[standardName] = standardName;
    } else if (propName === CAMELCASE) {
        accumulator[standardName.toLowerCase()] = standardName;
    } else {
        accumulator[standardName] = propName;
    }
    return accumulator;
}, {});
exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;
}),
"[project]/node_modules/inline-style-parser/cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;
// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';
// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */ function index(style, options) {
    if (typeof style !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!style) return [];
    options = options || {};
    /**
   * Positional.
   */ var lineno = 1;
    var column = 1;
    /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */ function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines) lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
    }
    /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */ function position() {
        var start = {
            line: lineno,
            column: column
        };
        return function(node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */ function Position(start) {
        this.start = start;
        this.end = {
            line: lineno,
            column: column
        };
        this.source = options.source;
    }
    /**
   * Non-enumerable source string.
   */ Position.prototype.content = style;
    /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */ function error(msg) {
        var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) ;
        else {
            throw err;
        }
    }
    /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */ function match(re) {
        var m = re.exec(style);
        if (!m) return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
    }
    /**
   * Parse whitespace.
   */ function whitespace() {
        match(WHITESPACE_REGEX);
    }
    /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */ function comments(rules) {
        var c;
        rules = rules || [];
        while(c = comment()){
            if (c !== false) {
                rules.push(c);
            }
        }
        return rules;
    }
    /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */ function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
        var i = 2;
        while(EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))){
            ++i;
        }
        i += 2;
        if (EMPTY_STRING === style.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;
        return pos({
            type: TYPE_COMMENT,
            comment: str
        });
    }
    /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */ function declaration() {
        var pos = position();
        // prop
        var prop = match(PROPERTY_REGEX);
        if (!prop) return;
        comment();
        // :
        if (!match(COLON_REGEX)) return error("property missing ':'");
        // val
        var val = match(VALUE_REGEX);
        var ret = pos({
            type: TYPE_DECLARATION,
            property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
            value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        // ;
        match(SEMICOLON_REGEX);
        return ret;
    }
    /**
   * Parse declarations.
   *
   * @return {Object[]}
   */ function declarations() {
        var decls = [];
        comments(decls);
        // declarations
        var decl;
        while(decl = declaration()){
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
        }
        return decls;
    }
    whitespace();
    return declarations();
}
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */ function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
module.exports = index;
}),
"[project]/node_modules/style-to-object/cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StyleToObject;
const inline_style_parser_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/inline-style-parser/cjs/index.js [app-client] (ecmascript)"));
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */ function StyleToObject(style, iterator) {
    let styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    const declarations = (0, inline_style_parser_1.default)(style);
    const hasIterator = typeof iterator === 'function';
    declarations.forEach((declaration)=>{
        if (declaration.type !== 'declaration') {
            return;
        }
        const { property, value } = declaration;
        if (hasIterator) {
            iterator(property, value, declaration);
        } else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
}
}),
"[project]/node_modules/style-to-js/cjs/utilities.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */ var skipCamelCase = function(property) {
    return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */ var capitalize = function(match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */ var trimHyphen = function(match, prefix) {
    return "".concat(prefix, "-");
};
/**
 * CamelCases a CSS property.
 */ var camelCase = function(property, options) {
    if (options === void 0) {
        options = {};
    }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    } else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase;
}),
"[project]/node_modules/style-to-js/cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var style_to_object_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/style-to-object/cjs/index.js [app-client] (ecmascript)"));
var utilities_1 = __turbopack_context__.r("[project]/node_modules/style-to-js/cjs/utilities.js [app-client] (ecmascript)");
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */ function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function(property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
StyleToJS.default = StyleToJS;
module.exports = StyleToJS;
}),
"[project]/node_modules/html-react-parser/lib/utilities.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.returnFirstArg = exports.canTextBeChildOfNode = exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = exports.PRESERVE_CUSTOM_ATTRIBUTES = void 0;
exports.isCustomComponent = isCustomComponent;
exports.setStyleProp = setStyleProp;
const react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const style_to_js_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/style-to-js/cjs/index.js [app-client] (ecmascript)"));
const RESERVED_SVG_MATHML_ELEMENTS = new Set([
    'annotation-xml',
    'color-profile',
    'font-face',
    'font-face-src',
    'font-face-uri',
    'font-face-format',
    'font-face-name',
    'missing-glyph'
]);
/**
 * Check if a tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param tagName - Tag name.
 * @param props - Props passed to the element.
 * @returns - Whether the tag is custom component.
 */ function isCustomComponent(tagName, props) {
    if (!tagName.includes('-')) {
        return Boolean(props && typeof props.is === 'string');
    }
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    if (RESERVED_SVG_MATHML_ELEMENTS.has(tagName)) {
        return false;
    }
    return true;
}
const styleOptions = {
    reactCompat: true
};
/**
 * Sets style prop.
 *
 * @param style - Inline style.
 * @param props - Props object.
 */ function setStyleProp(style, props) {
    if (typeof style !== 'string') {
        return;
    }
    if (!style.trim()) {
        props.style = {};
        return;
    }
    try {
        props.style = (0, style_to_js_1.default)(style, styleOptions);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        props.style = {};
    }
}
/**
 * @see https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
 */ exports.PRESERVE_CUSTOM_ATTRIBUTES = Number(react_1.version.split('.')[0]) >= 16;
/**
 * @see https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
 */ exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
    'tr',
    'tbody',
    'thead',
    'tfoot',
    'colgroup',
    'table',
    'head',
    'html',
    'frameset'
]);
/**
 * Checks if the given node can contain text nodes
 *
 * @param node - Element node.
 * @returns - Whether the node can contain text nodes.
 */ const canTextBeChildOfNode = (node)=>!exports.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(node.name);
exports.canTextBeChildOfNode = canTextBeChildOfNode;
/**
 * Returns the first argument as is.
 *
 * @param arg - The argument to be returned.
 * @returns - The input argument `arg`.
 */ const returnFirstArg = (arg)=>arg;
exports.returnFirstArg = returnFirstArg;
}),
"[project]/node_modules/html-react-parser/lib/attributes-to-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = attributesToProps;
const react_property_1 = __turbopack_context__.r("[project]/node_modules/react-property/lib/index.js [app-client] (ecmascript)");
const utilities_1 = __turbopack_context__.r("[project]/node_modules/html-react-parser/lib/utilities.js [app-client] (ecmascript)");
// https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
// https://developer.mozilla.org/docs/Web/HTML/Attributes
const UNCONTROLLED_COMPONENT_ATTRIBUTES = [
    'checked',
    'value'
];
const UNCONTROLLED_COMPONENT_NAMES = [
    'input',
    'select',
    'textarea'
];
const valueOnlyInputs = {
    reset: true,
    submit: true
};
/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param attributes - HTML/SVG DOM attributes.
 * @param nodeName - DOM node name.
 * @returns - React props.
 */ function attributesToProps(attributes = {}, nodeName) {
    const props = {};
    const isInputValueOnly = Boolean(attributes.type && valueOnlyInputs[attributes.type]);
    for(const attributeName in attributes){
        const attributeValue = attributes[attributeName];
        // ARIA (aria-*) or custom data (data-*) attribute
        if ((0, react_property_1.isCustomAttribute)(attributeName)) {
            props[attributeName] = attributeValue;
            continue;
        }
        // convert HTML/SVG attribute to React prop
        const attributeNameLowerCased = attributeName.toLowerCase();
        let propName = getPropName(attributeNameLowerCased);
        if (propName) {
            const propertyInfo = (0, react_property_1.getPropertyInfo)(propName);
            // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
            if (UNCONTROLLED_COMPONENT_ATTRIBUTES.includes(propName) && UNCONTROLLED_COMPONENT_NAMES.includes(nodeName) && !isInputValueOnly) {
                propName = getPropName('default' + attributeNameLowerCased);
            }
            props[propName] = attributeValue;
            switch(propertyInfo === null || propertyInfo === void 0 ? void 0 : propertyInfo.type){
                case react_property_1.BOOLEAN:
                    props[propName] = true;
                    break;
                case react_property_1.OVERLOADED_BOOLEAN:
                    if (attributeValue === '') {
                        props[propName] = true;
                    }
                    break;
            }
            continue;
        }
        // preserve custom attribute if React >=16
        if (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES) {
            props[attributeName] = attributeValue;
        }
    }
    // transform inline style to object
    (0, utilities_1.setStyleProp)(attributes.style, props);
    return props;
}
/**
 * Gets prop name from lowercased attribute name.
 *
 * @param attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */ function getPropName(attributeName) {
    return react_property_1.possibleStandardNames[attributeName];
}
}),
"[project]/node_modules/html-react-parser/lib/dom-to-react.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */ var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = domToReact;
const react_1 = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const attributes_to_props_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/html-react-parser/lib/attributes-to-props.js [app-client] (ecmascript)"));
const utilities_1 = __turbopack_context__.r("[project]/node_modules/html-react-parser/lib/utilities.js [app-client] (ecmascript)");
const React = {
    cloneElement: react_1.cloneElement,
    createElement: react_1.createElement,
    isValidElement: react_1.isValidElement
};
/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param nodes - DOM nodes.
 * @param options - Options.
 * @returns - String or JSX element(s).
 */ function domToReact(nodes, options = {}) {
    var _a, _b, _c, _d, _e;
    const reactElements = [];
    const hasReplace = typeof options.replace === 'function';
    const transform = (_a = options.transform) !== null && _a !== void 0 ? _a : utilities_1.returnFirstArg;
    const { cloneElement, createElement, isValidElement } = (_b = options.library) !== null && _b !== void 0 ? _b : React;
    const nodesLength = nodes.length;
    for(let index = 0; index < nodesLength; index++){
        const node = nodes[index];
        // replace with custom React element (if present)
        if (hasReplace) {
            let replaceElement = (_c = options.replace) === null || _c === void 0 ? void 0 : _c.call(options, node, index);
            if (isValidElement(replaceElement)) {
                // set "key" prop for sibling elements
                // https://react.dev/learn/rendering-lists#rules-of-keys
                if (nodesLength > 1) {
                    replaceElement = cloneElement(replaceElement, {
                        key: (_d = replaceElement.key) !== null && _d !== void 0 ? _d : index
                    });
                }
                reactElements.push(transform(replaceElement, node, index));
                continue;
            }
        }
        if (node.type === 'text') {
            const isWhitespace = !node.data.trim().length;
            // We have a whitespace node that can't be nested in its parent
            // so skip it
            if (isWhitespace && node.parent && !(0, utilities_1.canTextBeChildOfNode)(node.parent)) {
                continue;
            }
            // Trim is enabled and we have a whitespace node
            // so skip it
            if (options.trim && isWhitespace) {
                continue;
            }
            // We have a text node that's not whitespace and it can be nested
            // in its parent so add it to the results
            reactElements.push(transform(node.data, node, index));
            continue;
        }
        const element = node;
        let props = {};
        if (skipAttributesToProps(element)) {
            (0, utilities_1.setStyleProp)(element.attribs.style, element.attribs);
            props = element.attribs;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        } else if (element.attribs) {
            props = (0, attributes_to_props_1.default)(element.attribs, element.name);
        }
        let children;
        switch(node.type){
            case 'script':
            case 'style':
                // prevent text in <script> or <style> from being escaped
                // https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
                if (node.children[0]) {
                    props.dangerouslySetInnerHTML = {
                        __html: node.children[0].data
                    };
                }
                break;
            case 'tag':
                // setting textarea value in children is an antipattern in React
                // https://react.dev/reference/react-dom/components/textarea#caveats
                if (node.name === 'textarea' && node.children[0]) {
                    props.defaultValue = node.children[0].data;
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                } else if ((_e = node.children) === null || _e === void 0 ? void 0 : _e.length) {
                    // continue recursion of creating React elements (if applicable)
                    children = domToReact(node.children, options);
                }
                break;
            // skip all other cases (e.g., comment)
            default:
                continue;
        }
        // set "key" prop for sibling elements
        // https://react.dev/learn/rendering-lists#rules-of-keys
        if (nodesLength > 1) {
            props.key = index;
        }
        reactElements.push(transform(createElement(node.name, props, children), node, index));
    }
    return reactElements.length === 1 ? reactElements[0] : reactElements;
}
/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param node - Element node.
 * @returns - Whether the node attributes should be converted to props.
 */ function skipAttributesToProps(node) {
    return utilities_1.PRESERVE_CUSTOM_ATTRIBUTES && node.type === 'tag' && (0, utilities_1.isCustomComponent)(node.name, node.attribs);
}
}),
"[project]/node_modules/html-react-parser/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.htmlToDOM = exports.domToReact = exports.attributesToProps = exports.Text = exports.ProcessingInstruction = exports.Element = exports.Comment = void 0;
exports.default = HTMLReactParser;
const html_dom_parser_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/html-dom-parser/lib/client/html-to-dom.js [app-client] (ecmascript)"));
exports.htmlToDOM = html_dom_parser_1.default;
const attributes_to_props_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/html-react-parser/lib/attributes-to-props.js [app-client] (ecmascript)"));
exports.attributesToProps = attributes_to_props_1.default;
const dom_to_react_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/html-react-parser/lib/dom-to-react.js [app-client] (ecmascript)"));
exports.domToReact = dom_to_react_1.default;
var domhandler_1 = __turbopack_context__.r("[project]/node_modules/domhandler/dist/index.js [app-client] (ecmascript)");
Object.defineProperty(exports, "Comment", {
    enumerable: true,
    get: function() {
        return domhandler_1.Comment;
    }
});
Object.defineProperty(exports, "Element", {
    enumerable: true,
    get: function() {
        return domhandler_1.Element;
    }
});
Object.defineProperty(exports, "ProcessingInstruction", {
    enumerable: true,
    get: function() {
        return domhandler_1.ProcessingInstruction;
    }
});
Object.defineProperty(exports, "Text", {
    enumerable: true,
    get: function() {
        return domhandler_1.Text;
    }
});
const domParserOptions = {
    lowerCaseAttributeNames: false
};
/**
 * Converts HTML string to React elements.
 *
 * @param html - HTML string.
 * @param options - Parser options.
 * @returns - React element(s), empty array, or string.
 */ function HTMLReactParser(html, options) {
    var _a;
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    return (0, dom_to_react_1.default)((0, html_dom_parser_1.default)(html, (_a = options === null || options === void 0 ? void 0 : options.htmlparser2) !== null && _a !== void 0 ? _a : domParserOptions), options);
}
}),
"[project]/node_modules/html-react-parser/esm/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-react-parser/lib/index.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$react$2d$parser$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
]);

//# sourceMappingURL=_0~g007z._.js.map