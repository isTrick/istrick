import Header from './components/ContainerHeader.jsx';
import Main from './components/ContainerMain.jsx';
import Footer from './components/ContainerFooter.jsx';

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-w-full min-h-screen p-1 bg-zinc-950">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
