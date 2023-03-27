var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';
import NotFound from 'react-styleguidist/lib/client/rsg-components/NotFound';
import Sections from 'react-styleguidist/lib/client/rsg-components/Sections';
import StyleGuideRenderer from './StyleGuideRenderer';
import TableOfContents from "react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContents";
var StyleGuide = /** @class */ (function (_super) {
    __extends(StyleGuide, _super);
    function StyleGuide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleGuide.prototype.isRootUrl = function () {
        return window.location.hash === '';
    };
    StyleGuide.prototype.render = function () {
        var _a = this.props, config = _a.config, sections = _a.sections, allSections = _a.allSections, codeRevision = _a.codeRevision, cssRevision = _a.cssRevision, slots = _a.slots;
        return (_jsx(Context.Provider, __assign({ value: {
                codeRevision: codeRevision,
                config: config,
                slots: slots,
                cssRevision: cssRevision,
            } }, { children: _jsxs(StyleGuideRenderer, __assign({ title: config.title, version: config.version, toc: allSections ? _jsx(TableOfContents, { sections: allSections }) : null }, { children: [this.isRootUrl() && _jsx(Sections, { sections: [allSections[0]], depth: 1 }), !this.isRootUrl() && sections.length === 1 && _jsx(Sections, { sections: sections, depth: 1 }), !this.isRootUrl() && !sections.length && _jsx(NotFound, {})] }), cssRevision) })));
    };
    return StyleGuide;
}(Component));
export default StyleGuide;
