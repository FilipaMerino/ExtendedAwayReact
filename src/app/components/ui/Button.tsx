import styles from './Button.module.css';
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
} 

export default function Button({ text, href, variant = 'primary' }: ButtonProps) {
  return(
    <>
    <button className={styles[variant]}>
      <Link href={href}>{text}</Link>
    </button>
    </>
  )
}

