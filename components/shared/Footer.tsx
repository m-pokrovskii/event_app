import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='wrapper flex items-center justify-center sm:justify-between align-middle p-5 flex-col sm:flex-row'>
        <Link href='/'>
          <Image
            src='/assets/images/logo.svg'
            width={128}
            height={38}
            alt='Evently logo'
          />
        </Link>
        <p>2024 Evently. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
