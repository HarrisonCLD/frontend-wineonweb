import AddCategorie from "@components/stock/addcategorie";
import AddAttribut from "@components/stock/addattribut";
import AddOptionAttribut from "@components/stock/addoptionattribut";

export default function SettingsItem({ autorization, data }) {
  return (
    <div className="settings">
      <h3>Modifier les paramètres des produits :</h3>
      <AddCategorie />
      <AddAttribut />
      <AddOptionAttribut />
    </div>
  );
}
