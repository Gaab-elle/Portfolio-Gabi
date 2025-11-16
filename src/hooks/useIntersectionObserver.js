import { useEffect, useRef, useCallback } from 'react';

export const useIntersectionObserver = (setVisibleSections, setActiveSection) => {
    const sectionRefs = useRef({});
    const observerRef = useRef(null);

    const setupIntersectionObserver = useCallback(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set([...prev, entry.target.id]));
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-50px' }
        );

        ['home', 'services', 'projects', 'about-me', 'faq', 'contact'].forEach(id => {
            const ref = sectionRefs.current[id];
            if (ref) observerRef.current.observe(ref);
        });
    }, [setVisibleSections, setActiveSection]);

    useEffect(() => {
        setupIntersectionObserver();
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [setupIntersectionObserver]);

    return sectionRefs;
};