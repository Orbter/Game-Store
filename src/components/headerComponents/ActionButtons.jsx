import { LikedButton } from './shopLike/LikedButton.jsx';
import { ShopButton } from './shopLike/ShopButton.jsx';

function ActionButtons() {
  return (
    <div className="flex items-center justify-center">
      <LikedButton />
      <ShopButton />
    </div>
  );
}
export { ActionButtons };
