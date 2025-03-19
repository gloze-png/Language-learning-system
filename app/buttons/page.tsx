import { Button } from "@/components/ui/button";

const ButtonsPage =() => {
  return(
    <div className="p-4 space-y-4 flex flex-col max-w-50">
      <Button>
        Default
        </Button>
        <Button variant="primary">
        Primary
        </Button>
      <Button variant="primaryoutline">
        Primary Outline
        </Button>
        <Button variant="secondary">
        Secondary
        </Button>
      <Button variant="secondaryoutline">
        Secondary Outline
        </Button>
        <Button variant="danger">
        Danger
        </Button>
      <Button variant="dangeroutline">
        Danger Outline
        </Button>
        <Button variant="super">
        Super
        </Button>
      <Button variant="superoutline">
        Super Outline
        </Button>
        <Button variant="ghost">
        Ghost
        </Button>
        <Button variant="sidebar">
        Sidebar
        </Button>
      <Button variant="sidebaroutline">
        Sidebar Outline
        </Button>
    </div>
  );
};
export default ButtonsPage;