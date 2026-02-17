import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    once = true,
    className = '',
    style = {},
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-20px' });

    const directions = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { x: 50, y: 0 },
        right: { x: -50, y: 0 },
        none: { x: 0, y: 0 },
    };

    const { x, y } = directions[direction] || directions.up;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x, y }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
