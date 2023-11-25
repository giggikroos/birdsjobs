import ActionButtons from './ActionButtons';
import Logo from './Logo';
import Navs from './Navs';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  px-10 border-b ">
      <Logo />
      <Navs />
      <ActionButtons />
    </div>
  );
};
export default Navbar;
