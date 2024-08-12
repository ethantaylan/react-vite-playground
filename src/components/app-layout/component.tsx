// componentsMap.tsx
import { DynamicImageImport } from "./dynamic-image-import/dynamic-image-import";
import { AnotherComponent } from "../another-component/another-component";
import { ReactElement } from "react";
import { NavLink, useParams } from "react-router-dom";

export function Component() {
  const { name } = useParams<{ name: string }>();

  const componentsMap: Record<string, ReactElement> = {
    "dynamic-image-import": <DynamicImageImport />,
    "another-component": <AnotherComponent />,
  };

  return (
    <>
      {componentsMap[name || ""]}

      <NavLink className="btn btn-secondary btn-ghost mt-10" to={"/"}>
        Back to menu
      </NavLink>
    </>
  );
}
