type ActiveTab = 'tab-recent' | 'tab-favorite';
type AsideProps = {
  activeImage: null | Image;
  isAsideOpen: boolean;
};

interface AppReducerState {
  asideProps: AsideProps;
  activeTab: ActiveTab;
  images: Image[];
  isLoading: boolean;
}

interface Image {
  id: string;
  url: string;
  filename: string;
  description: string;
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
  dimensions: {
    height: number;
    width: number;
  };
  resolution: {
    height: number;
    width: number;
  };
  sizeInBytes: number;
  sharedWith: {
    id: string;
    name: string;
    avatar: string;
  }[];
  favorited: boolean;
}

export type { ActiveTab, AsideProps, Image, AppReducerState };
