import { useNavigate } from "react-router-dom";
import { componentsMap } from "../components/app-layout/component";
import { Items } from "../components/items/items";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="mt-3 flex flex-col gap-2">
        {Object.keys(componentsMap).map((c) => (
          <button
            onClick={() => navigate(`/${c}`)}
            className="btn btn-primary"
            key={c}
          >
            <Items item={c} />
          </button>
        ))}
      </div>
    </div>
  );
}
