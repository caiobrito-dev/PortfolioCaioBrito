import { FaHeart } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer
            style={{
                textAlign: 'center',
                padding: '2rem 1.5rem',
                borderTop: '1px solid rgba(59, 130, 246, 0.1)',
                color: 'var(--color-text-muted)',
                fontSize: '0.9rem',
            }}
        >
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                © {new Date().getFullYear()} Caio B. de Brito. Feito com{' '}
                <FaHeart style={{ color: 'var(--color-primary)' }} size={14} /> e React.
            </p>
        </footer>
    );
}
