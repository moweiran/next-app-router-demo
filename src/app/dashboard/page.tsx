import { Suspense } from "react";
import Loading from "./loading";
import DashboardLayout from "./layout";

export default function Page() {
  return (
    <div>
      hello I am a dashboard page!
      <div></div>
      <Suspense fallback={<Loading />}>abc</Suspense>
    </div>
  );
}
