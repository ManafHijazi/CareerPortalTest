import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

const Layout = ({ children }) => {
    return (
        <main>
            <Nav />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
