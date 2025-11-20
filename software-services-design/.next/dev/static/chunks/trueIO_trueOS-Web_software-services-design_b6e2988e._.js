(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/trueIO/trueOS-Web/software-services-design/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/button.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function Navigation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/t-logo.svg",
                        alt: "trueOS Logo",
                        className: "w-4 h-7"
                    }, void 0, false, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#services",
                            className: "text-sm font-medium text-muted-foreground hover:text-foreground transition",
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#capabilities",
                            className: "text-sm font-medium text-muted-foreground hover:text-foreground transition",
                            children: "Capabilities"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#work",
                            className: "text-sm font-medium text-muted-foreground hover:text-foreground transition",
                            children: "Work"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            className: "text-sm",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            className: "bg-accent hover:bg-accent/90 text-accent-foreground",
                            children: "Get Started"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-10 max-w-5xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/true-logo.svg",
                                alt: "trueOS Logo",
                                className: "h-32 md:h-40 lg:h-48 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-center font-normal",
                                children: "Specialized contractor team providing high-speed deployment of custom business platforms, including CRMs, internal portals, reporting systems, and full-stack applications. We deliver complete, production-ready software systems on a contract basis."
                            }, void 0, false, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 rounded-full px-8",
                                        children: [
                                            "Start a Project",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 19,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        variant: "outline",
                                        className: "border-2 border-foreground hover:bg-foreground/5 font-semibold rounded-full px-8 bg-transparent",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-20 flex flex-wrap gap-12 md:gap-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl md:text-6xl font-semibold text-foreground",
                                        children: "Full Stack"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground font-normal mt-2",
                                        children: "Design to Deployment"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl md:text-6xl font-semibold text-foreground",
                                        children: "Single Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground font-normal mt-2",
                                        children: "Flat Hour Pricing"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl md:text-6xl font-semibold text-foreground",
                                        children: "Startup"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground font-normal mt-2",
                                        children: "Agile & Flexible"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Features
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
"use client";
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        title: "Full-Stack Architecture & Deployment",
        description: "Complete systems from architecture to deployment with modern best practices"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        title: "Integrated Business Systems",
        description: "Connecting CRM, reporting, customer management, and internal tools seamlessly"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        title: "Security-Hardening & Backend Workflows",
        description: "Production-ready security implementations and optimized backend processes"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "High-Efficiency UI Layout & Ergonomics",
        description: "User interfaces designed for maximum efficiency and optimal user experience"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        title: "Rapid MVP → Production Pipelines",
        description: "Fast development cycles from minimum viable product to full production deployment"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        title: "Production-Ready Supabase Implementations",
        description: "Secure, scalable database solutions with enterprise-grade configurations"
    }
];
function Features() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "capabilities",
        className: "py-32 md:py-40 px-4 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-20 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight",
                            children: "Core Capabilities"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl font-light leading-relaxed",
                            children: "Enterprise-grade development at startup speed"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: features.map((feature, index)=>{
                        const Icon = feature.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group p-8 border border-border rounded-sm hover:border-accent/30 transition-all duration-300 bg-card hover:shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-6 h-6 text-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-foreground mb-3",
                                    children: feature.title
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-base leading-relaxed font-light",
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
                            lineNumber: 55,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = Features;
var _c;
__turbopack_context__.k.register(_c, "Features");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function HowItWorks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 md:py-40 px-4 bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-20 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight",
                            children: "How trueOS works"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                            lineNumber: 8,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl font-light leading-relaxed",
                            children: "Contract-based engineering with a single hourly rate"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-7xl font-semibold text-accent/30",
                                    children: "01"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold text-foreground",
                                            children: "Dedicated Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed",
                                            children: "A single trueOS engineer performs the work, supported by security and UI specialists as needed. Fast, flexible, and scalable."
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-7xl font-semibold text-accent/30",
                                    children: "02"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold text-foreground",
                                            children: "Flat Rate Billing"
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed",
                                            children: "Single hourly rate. You never pay for 3 people — only for productive hours. The engineer assigned to your project handles all communication and work."
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-7xl font-semibold text-accent/30",
                                    children: "03"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold text-foreground",
                                            children: "Production-Ready Systems"
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground leading-relaxed",
                                            children: "Complete, production-ready software systems from architecture to deployment. We cover the full stack from design to interface."
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = HowItWorks;
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Team
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
"use client";
;
;
const team = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        role: "Systems Architect",
        description: "Full-stack architecture and deployment leadership"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        role: "Security Engineer",
        description: "Security hardening, compliance, and backend workflows"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        role: "UI/UX Designer",
        description: "High-efficiency interface design and user experience optimization"
    }
];
function Team() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 md:py-40 px-4 bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-20 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight",
                            children: "Our team"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl font-light leading-relaxed",
                            children: "Full-stack expertise covering every layer of your application"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: team.map((member, index)=>{
                        const Icon = member.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-12 border border-border rounded-sm bg-background hover:border-accent/30 transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-8 h-8 text-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-semibold text-foreground mb-3",
                                    children: member.role
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground leading-relaxed font-light",
                                    children: member.description
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Team;
var _c;
__turbopack_context__.k.register(_c, "Team");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
"use client";
;
;
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        title: "Custom CRMs",
        description: "Enterprise-grade customer relationship management tailored to your workflow"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        title: "Reporting Platforms",
        description: "Data dashboards and documentation systems for real-time insights"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Customer Portals",
        description: "Secure client-facing applications for transactions and engagement"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Operational Dashboards",
        description: "Admin dashboards, time tracking, inventory, and workflow automation"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        title: "Supabase-Secured Backend",
        description: "Production-ready databases with security hardening and optimization"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        title: "High-Efficiency UI/UX",
        description: "High-efficiency interface design and user experience optimization"
    }
];
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 md:py-40 px-4 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-20 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight",
                            children: "What we do"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl font-light leading-relaxed",
                            children: "Full-stack solutions from concept to production"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: services.map((service, index)=>{
                        const Icon = service.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group p-8 border border-border rounded-sm hover:border-accent/30 transition-all duration-300 bg-card hover:shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-6 h-6 text-accent"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-foreground mb-3",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-base leading-relaxed font-light",
                                    children: service.description
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
'use client';
;
;
const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CTO at TechCorp',
        content: 'Trueos transformed how we handle our infrastructure. The support team is exceptional.',
        rating: 5
    },
    {
        name: 'Michael Rodriguez',
        role: 'CEO at StartupXYZ',
        content: 'We scaled from 100 to 10,000 users without a single downtime. Highly recommended.',
        rating: 5
    },
    {
        name: 'Emily Watson',
        role: 'DevOps Lead at Enterprise Co',
        content: 'The best investment we made for our development workflow. ROI was immediate.',
        rating: 5
    }
];
function Testimonials() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "testimonials",
        className: "py-20 px-4 bg-muted/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-foreground text-balance",
                            children: "Trusted by Industry Leaders"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl mx-auto text-balance",
                            children: "See what teams say about using trueos"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 rounded-lg bg-background border border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 mb-4",
                                    children: [
                                        ...Array(testimonial.rating)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-4 h-4 fill-primary text-primary"
                                        }, i, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground mb-6 leading-relaxed",
                                    children: testimonial.content
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-foreground",
                                            children: testimonial.name
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: testimonial.role
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
function CTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 md:py-40 px-4 bg-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-6xl md:text-7xl font-black text-background text-balance leading-tight",
                            children: "Ready to start?"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-background/80 max-w-2xl font-light leading-relaxed",
                            children: "Contract-based software engineering with a single hourly rate. No surprises, no overhead—just production-ready systems delivered fast."
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row gap-4 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            variant: "secondary",
                            className: "gap-2",
                            children: [
                                "Get Started",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "lg",
                            variant: "outline",
                            className: "text-background border-background hover:bg-background/10 bg-transparent",
                            children: "Contact Sales"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = CTA;
var _c;
__turbopack_context__.k.register(_c, "CTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-foreground text-background py-16 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 border-2 border-background flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-background font-bold text-xs",
                                                children: "t"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                lineNumber: 13,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 12,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-semibold",
                                            children: "trueos"
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-background/80",
                                    children: "Contract-based software engineering for custom business platforms."
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "text-background/80 hover:text-background transition",
                                                children: "Features"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                lineNumber: 23,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "text-background/80 hover:text-background transition",
                                                children: "Pricing"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                lineNumber: 24,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "text-background/80 hover:text-background transition",
                                                children: "Security"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "text-background/80 hover:text-background transition",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "text-background/80 hover:text-background transition",
                                                children: "Blog"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "text-background/80 hover:text-background transition",
                                                children: "Careers"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "(256) 245-2853"
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "trueos.dev@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-background/20 pt-8 text-sm text-background/60 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2025 trueos. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/features.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$how$2d$it$2d$works$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/how-it-works.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$team$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/team.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/services.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/testimonials.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$cta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$how$2d$it$2d$works$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$team$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$cta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
        lineNumber: 14,
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
]);

//# sourceMappingURL=trueIO_trueOS-Web_software-services-design_b6e2988e._.js.map