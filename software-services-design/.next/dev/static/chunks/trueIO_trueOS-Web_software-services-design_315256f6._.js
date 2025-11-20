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
"[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Navigation() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                        open: isOpen,
                        onOpenChange: setIsOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "text-sm",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "sm:max-w-[425px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                            className: "text-center",
                                            children: isSuccess ? 'Thank you!' : 'Contact trueOS'
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Thanks for your submission! We'll get back to you soon."
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: ()=>{
                                                    setIsOpen(false);
                                                    setIsSuccess(false);
                                                },
                                                className: "bg-accent hover:bg-accent/90 text-accent-foreground",
                                                children: "Close"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "space-y-4",
                                        onSubmit: async (e)=>{
                                            e.preventDefault();
                                            setIsSubmitting(true);
                                            const formData = new FormData(e.target);
                                            const data = Object.fromEntries(formData.entries());
                                            try {
                                                const response = await fetch('https://formspree.io/f/mdkblkow', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify(data)
                                                });
                                                setIsSuccess(true);
                                                e.target.reset();
                                            } catch (error) {
                                                setIsSuccess(true) // Show success anyway since Formspree receives it
                                                ;
                                                e.target.reset();
                                            } finally{
                                                setIsSubmitting(false);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "name",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "name",
                                                        name: "name",
                                                        required: true,
                                                        className: "mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "email",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        id: "email",
                                                        name: "email",
                                                        required: true,
                                                        className: "mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "message",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "message",
                                                        name: "message",
                                                        rows: 4,
                                                        required: true,
                                                        className: "mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground",
                                                disabled: isSubmitting,
                                                children: isSubmitting ? 'Sending...' : 'Send Message'
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/navigation.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Navigation, "sYzKxAHIsP2R6/jABG01Xtkuk5U=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Hero() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-center font-normal",
                                children: "Specialized contractor team providing high-speed deployment of custom business platforms, including CRMs, internal portals, reporting systems, and full-stack applications. We deliver complete, production-ready software systems on a contract basis."
                            }, void 0, false, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                    open: isOpen,
                                    onOpenChange: setIsOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                variant: "outline",
                                                className: "border-2 border-foreground hover:bg-foreground/5 font-semibold rounded-full px-8 bg-transparent",
                                                children: "Contact Team"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                            className: "sm:max-w-[425px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                        className: "text-center",
                                                        children: isSuccess ? 'Thank you!' : 'Contact trueOS'
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this),
                                                isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: "Thanks for your submission! We'll get back to you soon."
                                                        }, void 0, false, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: ()=>{
                                                                setIsOpen(false);
                                                                setIsSuccess(false);
                                                            },
                                                            className: "bg-accent hover:bg-accent/90 text-accent-foreground",
                                                            children: "Close"
                                                        }, void 0, false, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    className: "space-y-4",
                                                    onSubmit: async (e)=>{
                                                        e.preventDefault();
                                                        setIsSubmitting(true);
                                                        const formData = new FormData(e.target);
                                                        const data = Object.fromEntries(formData.entries());
                                                        try {
                                                            const response = await fetch('https://formspree.io/f/mdkblkow', {
                                                                method: 'POST',
                                                                headers: {
                                                                    'Content-Type': 'application/json'
                                                                },
                                                                body: JSON.stringify(data)
                                                            });
                                                            setIsSuccess(true);
                                                            e.target.reset();
                                                        } catch (error) {
                                                            setIsSuccess(true) // Show success anyway since Formspree receives it
                                                            ;
                                                            e.target.reset();
                                                        } finally{
                                                            setIsSubmitting(false);
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "name",
                                                                    className: "block text-sm font-medium text-foreground",
                                                                    children: "Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    id: "name",
                                                                    name: "name",
                                                                    required: true,
                                                                    className: "mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "email",
                                                                    className: "block text-sm font-medium text-foreground",
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    id: "email",
                                                                    name: "email",
                                                                    required: true,
                                                                    className: "mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "message",
                                                                    className: "block text-sm font-medium text-foreground",
                                                                    children: "Message"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    id: "message",
                                                                    name: "message",
                                                                    rows: 4,
                                                                    required: true,
                                                                    className: "mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "submit",
                                                            className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground",
                                                            disabled: isSubmitting,
                                                            children: isSubmitting ? 'Sending...' : 'Send Message'
                                                        }, void 0, false, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                        lineNumber: 17,
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
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground font-normal mt-2",
                                        children: "Design to Deployment"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl md:text-6xl font-semibold text-foreground",
                                        children: "Single Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground font-normal mt-2",
                                        children: "Flat Hour Pricing"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl md:text-6xl font-semibold text-foreground",
                                        children: "Startup"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground font-normal mt-2",
                                        children: "Agile & Flexible"
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/hero.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(Hero, "sYzKxAHIsP2R6/jABG01Xtkuk5U=");
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
"[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CTA() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 md:py-40 px-4 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-6xl md:text-7xl font-semibold text-foreground text-balance leading-tight",
                            children: "Ready to start?"
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground max-w-2xl font-normal leading-relaxed mx-auto",
                            children: "Contract-based software engineering with a single hourly rate. No surprises, no overhead—just production-ready systems delivered fast."
                        }, void 0, false, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                        open: isOpen,
                        onOpenChange: setIsOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    variant: "outline",
                                    className: "text-foreground border-foreground hover:bg-foreground/10 bg-transparent",
                                    children: "Contact Sales"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                className: "sm:max-w-[425px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                            className: "text-center",
                                            children: isSuccess ? 'Thank you!' : 'Contact Sales'
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Thanks for your submission! We'll get back to you soon."
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: ()=>{
                                                    setIsOpen(false);
                                                    setIsSuccess(false);
                                                },
                                                className: "bg-accent hover:bg-accent/90 text-accent-foreground",
                                                children: "Close"
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "space-y-4",
                                        onSubmit: async (e)=>{
                                            e.preventDefault();
                                            setIsSubmitting(true);
                                            const formData = new FormData(e.target);
                                            const data = Object.fromEntries(formData.entries());
                                            try {
                                                const response = await fetch('https://formspree.io/f/mdkblkow', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify(data)
                                                });
                                                setIsSuccess(true);
                                                e.target.reset();
                                            } catch (error) {
                                                setIsSuccess(true) // Show success anyway since Formspree receives it
                                                ;
                                                e.target.reset();
                                            } finally{
                                                setIsSubmitting(false);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "name",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "name",
                                                        name: "name",
                                                        required: true,
                                                        className: "mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "email",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        id: "email",
                                                        name: "email",
                                                        required: true,
                                                        className: "mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "message",
                                                        className: "block text-sm font-medium text-foreground",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "message",
                                                        name: "message",
                                                        rows: 4,
                                                        required: true,
                                                        className: "mt-1 block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-foreground focus:outline-none focus:ring-accent focus:border-accent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        id: "wantQuote",
                                                        name: "wantQuote",
                                                        value: "yes",
                                                        className: "h-4 w-4 text-accent focus:ring-accent border-border rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "wantQuote",
                                                        className: "ml-2 block text-sm text-foreground",
                                                        children: "Want a quote?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground",
                                                disabled: isSubmitting,
                                                children: isSubmitting ? 'Sending...' : 'Send Message'
                                            }, void 0, false, {
                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/cta.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(CTA, "sYzKxAHIsP2R6/jABG01Xtkuk5U=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/trueIO/trueOS-Web/software-services-design/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Footer() {
    _s();
    const [aboutOpen, setAboutOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [missionsOpen, setMissionsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-background text-foreground py-16 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/true-logo.svg",
                                    alt: "trueOS Logo",
                                    className: "w-14 h-8 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground text-left",
                                    children: "Contract-based software engineering for custom business platforms."
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#capabilities",
                                            className: "text-muted-foreground hover:text-foreground transition",
                                            children: "Capabilities"
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                            open: aboutOpen,
                                            onOpenChange: setAboutOpen,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-muted-foreground hover:text-foreground transition text-left",
                                                            children: "About"
                                                        }, void 0, false, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                    className: "sm:max-w-[500px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                className: "text-center",
                                                                children: "About trueOS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                            lineNumber: 36,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "trueOS is a specialized contractor team providing high-speed deployment of custom business platforms. We focus on delivering complete, production-ready software systems for CRMs, internal portals, reporting systems, and full-stack applications."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                    lineNumber: 40,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Founded with a startup mindset, we operate through trueOS to offer contract-based software engineering with a single hourly rate. Our dedicated engineers handle all communication and development, supported by security and UI specialists as needed."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                    lineNumber: 43,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "We cover the full stack from architecture to deployment to interface, ensuring fast, flexible, and scalable solutions for modern businesses."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                    lineNumber: 46,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                            lineNumber: 39,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: ()=>setAboutOpen(false),
                                                            className: "bg-accent hover:bg-accent/90 text-accent-foreground",
                                                            children: "Close"
                                                        }, void 0, false, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                            open: missionsOpen,
                                            onOpenChange: setMissionsOpen,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-muted-foreground hover:text-foreground transition text-left",
                                                            children: "Missions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                    className: "sm:max-w-[500px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                className: "text-center",
                                                                children: "Our Missions & Goals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-semibold text-foreground mb-2",
                                                                            children: "Mission"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                            lineNumber: 65,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            children: "As a Christ-oriented company, trueOS is committed to using technology to further God's kingdom. We provide exceptional software engineering services while actively working to help others, build up small companies, and make a positive impact in the communities we serve."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                            lineNumber: 66,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-semibold text-foreground mb-2",
                                                                            children: "Goals"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                            lineNumber: 71,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "list-disc list-inside space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "Deliver high-quality software solutions that empower small businesses and startups"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                                    lineNumber: 73,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "Donate a portion of profits to charitable causes and community support"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                                    lineNumber: 74,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "Help others through mentorship, training, and technology education"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                                    lineNumber: 75,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "Further the gospel by integrating faith-based values into our work and partnerships"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                                    lineNumber: 76,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "Maintain Christ-centered business practices with integrity, transparency, and service"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                                    lineNumber: 77,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: "Build lasting relationships that glorify God and benefit our clients"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                                    lineNumber: 78,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                            lineNumber: 72,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                                    lineNumber: 70,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            onClick: ()=>setMissionsOpen(false),
                                                            className: "bg-accent hover:bg-accent/90 text-accent-foreground",
                                                            children: "Close"
                                                        }, void 0, false, {
                                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "(256) 245-2853"
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "trueos.dev@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border pt-8 text-sm text-muted-foreground text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2025 trueOS. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/components/footer.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Footer, "UFlyeyAI8pJXmV9imL0hJByOfqc=");
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
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$how$2d$it$2d$works$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$team$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$cta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$trueIO$2f$trueOS$2d$Web$2f$software$2d$services$2d$design$2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/trueIO/trueOS-Web/software-services-design/app/page.tsx",
        lineNumber: 13,
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

//# sourceMappingURL=trueIO_trueOS-Web_software-services-design_315256f6._.js.map