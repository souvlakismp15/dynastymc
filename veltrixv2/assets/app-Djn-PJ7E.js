document.addEventListener("livewire:init", () => {
    Livewire.hook("request", ({
        fail: s
    }) => {
        s(({
            status: e,
            preventDefault: n
        }) => {
            e === 419 && (window.location.reload(), n())
        })
    })
});
Alpine.store("notifications", {
    init() {
        Livewire.on("notify", s => {
            Alpine.store("notifications").addNotification(s)
        })
    },
    notifications: [],
    addNotification(s) {
        s = s[0], s.show = !1, s.id = Date.now() + Math.floor(Math.random() * 1e3), this.notifications.push(s), Alpine.nextTick(() => {
            this.notifications = this.notifications.map(e => (e.id === e.id && (e.show = !0), e))
        }), setTimeout(() => {
            this.removeNotification(s.id)
        }, s.timeout || 5e3)
    },
    removeNotification(s) {
        this.notifications = this.notifications.map(e => (e.id === s && (e.show = !1), e)).filter(e => e.show)
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const s = {
            rootMargin: "500px 0px",
            threshold: .001,
            delay: 50,
            lazyClass: "lazy-auto",
            loadedClass: "lazy-loaded",
            loadingClass: "lazy-loading",
            errorClass: "lazy-error",
            selectors: {
                images: 'img[src]:not([src=""]):not([loading="lazy"])',
                backgrounds: '[style*="background-image"]:not([data-lazy-ignore])',
                iframes: 'iframe[src]:not([src=""]):not([loading="lazy"])'
            }
        },
        e = () => {
            const a = [...document.querySelectorAll(s.selectors.images), ...document.querySelectorAll(s.selectors.backgrounds), ...document.querySelectorAll(s.selectors.iframes)];
            return a.forEach(t => {
                if (!(t.closest("[data-lazy-ignore]") || t.classList.contains(s.loadedClass) || t.classList.contains(s.lazyClass)))
                    if (t.tagName === "IMG") t.dataset.src = t.src, t.removeAttribute("src"), t.classList.add(s.lazyClass);
                    else if (t.style.backgroundImage) {
                    const r = t.style.backgroundImage.match(/url\(["']?(.*?)["']?\)/i);
                    r && r[1] && (t.dataset.bgSrc = r[1], t.style.backgroundImage = "none", t.classList.add(s.lazyClass))
                } else t.tagName === "IFRAME" && (t.dataset.src = t.src, t.removeAttribute("src"), t.classList.add(s.lazyClass))
            }), a.length > 0
        },
        n = () => {
            const a = e(),
                t = document.getElementsByClassName(s.lazyClass);
            if (t.length) {
                if ("IntersectionObserver" in window) {
                    const o = new IntersectionObserver(i => {
                        i.forEach(d => {
                            if (d.isIntersecting) {
                                const l = d.target;
                                c(l), o.unobserve(l)
                            }
                        })
                    }, s);
                    Array.from(t).forEach(i => o.observe(i))
                } else {
                    const o = g(() => {
                        Array.from(t).forEach(i => {
                            u(i) && c(i)
                        })
                    }, 100);
                    window.addEventListener("scroll", o), window.addEventListener("resize", o), o()
                }
                a && setTimeout(n, 500)
            }
        },
        c = a => {
            a.classList.contains(s.lazyClass) && (a.classList.add(s.loadingClass), requestIdleCallback(() => {
                try {
                    a.dataset.src && (a.tagName === "IMG" || a.tagName === "IFRAME") && (a.src = a.dataset.src), a.dataset.bgSrc && (a.style.backgroundImage = `url(${a.dataset.bgSrc})`), a.classList.remove(s.lazyClass, s.loadingClass), a.classList.add(s.loadedClass), a.dispatchEvent(new CustomEvent("lazy-loaded", {
                        bubbles: !0
                    }))
                } catch (t) {
                    a.classList.remove(s.loadingClass), a.classList.add(s.errorClass), console.error("Lazy load error:", t)
                }
            }, {
                timeout: 100
            }))
        },
        u = a => {
            const t = a.getBoundingClientRect();
            return t.top <= window.innerHeight * 2 && t.bottom >= 0 && t.left <= window.innerWidth * 2 && t.right >= 0
        },
        g = (a, t) => {
            let r;
            return function() {
                const o = arguments,
                    i = this;
                r || (a.apply(i, o), r = !0, setTimeout(() => r = !1, t))
            }
        };
    setTimeout(n, s.delay), ((a, t) => {
        new MutationObserver(o => {
            o.forEach(() => {
                e() && setTimeout(n, 100)
            })
        }).observe(a, {
            childList: !0,
            subtree: !0,
            attributes: !1,
            characterData: !1
        })
    })(document.documentElement), window.turboLazyLoad = n
});