import Link from "next/link";
import { useContext, useState } from "react";
import { LayoutContext } from "../../LayoutContext/LayoutProvider";
import { Skeleton } from "@material-ui/lab";
import cx from "classnames";
import styles from "./Nav.module.scss";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";

const Nav = () => {
    const { appearance } = useContext(LayoutContext);
    const logo = appearance && appearance.data.logo.media;
    const [openNav, setOpenNav] = useState(false);
    const router = useRouter();
    const { locale, replace, pathname, query } = router;
    const changeLanguage = () => {
        const lang = locale === "ar" ? "en" : "ar";
        // replace(pathname, pathname, { locale: lang });
        replace(
            {
                pathname,
                query,
            },
            {
                pathname,
                query,
            },
            { locale: lang }
        );
    };
    const t = locale === "en" ? en : ar;
    return (
        <nav className={styles.nav}>
            <div className={styles.innerRow}>
                <Link
                    href={{
                        pathname: "/",
                        query: {},
                    }}
                    locale={locale}
                >
                    <a className={styles.logo}>
                        {!logo ? (
                            <Skeleton
                                variant="rect"
                                animation="wave"
                                width={154}
                                height={50}
                            />
                        ) : (
                            <img src={logo} alt="company logo" />
                        )}
                    </a>
                </Link>

                <div className={cx(styles.wrapper, { [styles.open]: openNav })}>
                    <ul className={styles.links}>
                        <li>
                            <Link
                                href={{
                                    pathname: "/",
                                    query: {},
                                }}
                                locale={locale}
                            >
                                {t.perk}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={{
                                    pathname: "/",
                                    query: {},
                                }}
                                locale={locale}
                            >
                                {t.gallery}
                            </Link>
                        </li>
                        <li>
                            <Link href="/jobs">{t.jobs}</Link>
                        </li>
                    </ul>
                    <ul className={styles.links}>
                        <li>
                            <Link
                                href={{
                                    pathname: "/",
                                    query: {},
                                }}
                                locale={locale}
                            >
                                {t.signIn}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={{
                                    pathname: "/",
                                    query: {},
                                }}
                                locale={locale}
                            >
                                <a className={styles.btn}>{t.signUp}</a>
                            </Link>
                        </li>
                        <li>
                            <a onClick={changeLanguage}>
                                {locale === "ar" ? "English" : "العربية"}
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className={styles.toggle}
                    role="button"
                    onClick={() => {
                        setOpenNav(!openNav);
                        document.body.style.overflow = !openNav
                            ? "hidden"
                            : "visible";
                    }}
                >
                    <i className={`fas fa-${openNav ? "times" : "bars"}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
