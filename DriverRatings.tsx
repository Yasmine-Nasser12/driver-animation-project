import DriverRatingsOverview from '../imports/DriverRatingsOverview';

interface DriverRatingsProps {
  onBack: () => void;
  onViewAllReviews: () => void;
}

export function DriverRatings({ onBack, onViewAllReviews }: DriverRatingsProps) {
  return (
    <div className="relative" onClick={(e) => {
      const target = e.target as HTMLElement;
      const clickedText = target.textContent;
      
      // Check if back button was clicked
      const backButton = target.closest('[data-name="Button1"]');
      if (backButton) {
        onBack();
        return;
      }

      // Check for View All Reviews button
      if (clickedText?.includes('View All Reviews')) {
        onViewAllReviews();
        return;
      }
    }}>
      <DriverRatingsOverview />
    </div>
  );
}
