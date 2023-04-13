type ActiveTab = 'tab-recent' | 'tab-favorite';

interface AppReducerState {
  activeTab: ActiveTab;
  activeImage: null | Image;
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

export type { ActiveTab, Image, AppReducerState };
