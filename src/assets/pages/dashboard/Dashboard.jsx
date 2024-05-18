import { Navbar } from "../../../components/Navbars/Navbar";
import { useEffect} from "react";
import './dashboard.css';
import { usePublications } from "../../../shared/hooks/";
import { Card } from "../../../components/Card/Card";

export const Dashboard = () => {
  const { getPublications, publicaciones, isLoading } = usePublications();

  useEffect(() => {
    if (!isLoading) {
      getPublications();
    }
  }, []);
  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {
          isLoading ? <h1>Loading...</h1> : <Card publications={publicaciones} />
        }
      </div>
    </div >
  )
}
