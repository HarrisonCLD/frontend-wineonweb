import { get_dataform } from "@helpers/api/dataform.api.helper";

export const DownloadData = (role, setState) => {
  parseInt(role);
  switch (role) {
    case 1:
      return get_dataform(setState);
    case 2:
      return get_dataform(setState);
  }
};
