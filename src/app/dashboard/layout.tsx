import { getCategories } from "../api/categories/getCategories";
import { ClickCounter } from "../components/click-counter";
import { TabGroup } from "../components/tab-group";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/dashboard"
          items={[
            {
              text: "Home",
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
