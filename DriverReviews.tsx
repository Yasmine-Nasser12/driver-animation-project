import DriversReviews from '../imports/DriversReviews';

interface DriverReviewsProps {
  onBack: () => void;
}

export function DriverReviews({ onBack }: DriverReviewsProps) {
  return (
    <div className="relative" onClick={(e) => {
      const target = e.target as HTMLElement;
      const clickedText = target.textContent;
      
      // Check for Back to Profile button
      if (clickedText?.includes('Back to Profile')) {
        onBack();
        return;
      }
    }}>
      <DriversReviews />
    </div>
  );
}
