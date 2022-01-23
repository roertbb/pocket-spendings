import {
  MdFastfood,
  MdDirectionsBus,
  MdMedicalServices,
  MdOutlineStickyNote2,
  MdHome,
} from "react-icons/md";
import { AddButton, ListItem } from "@ui";

function Categories() {
  return (
    <>
      <ul>
        <ListItem
          text="Food"
          description="Some secondary text"
          Icon={MdFastfood}
          color="green"
          rightSlot={<p className="text-sm text-green-600">123.45 zł</p>}
        />
        <ListItem
          text="Transport"
          description="Some secondary text"
          Icon={MdDirectionsBus}
          color="red"
          rightSlot={<p className="text-sm text-red-600">45.12 zł</p>}
        />
        <ListItem
          text="Medical services"
          description="Some secondary text"
          Icon={MdMedicalServices}
          color="blue"
          rightSlot={<p className="text-sm text-red-600">123.45 zł</p>}
        />
        <ListItem
          text="Bills"
          description="Some secondary text"
          Icon={MdOutlineStickyNote2}
          color="purple"
          rightSlot={<p className="text-sm text-green-600">1000.45 zł</p>}
        />
        <ListItem
          text="Home"
          description="Some secondary text"
          Icon={MdHome}
          color="orange"
          rightSlot={<p className="text-sm text-green-600">0.12 zł</p>}
        />
      </ul>
      <AddButton url="/categories/new" />
    </>
  );
}

Categories.title = "Categories";

export default Categories;
