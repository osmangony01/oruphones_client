import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="">
            <Sidebar></Sidebar>
        
            <Header></Header>
            <div className="bg-slate-100 h-[calc(100vh-60px)]">
                {children}
            </div>
           

        </div>
    );
};

export default DashboardLayout;