import Group195 from '../imports/Group195';

interface AdvancedSettingsProps {
  onBack: () => void;
  onNavigateToReviews: () => void;
  onNavigateToNotifications: () => void;
}

export function AdvancedSettings({ onBack, onNavigateToReviews, onNavigateToNotifications }: AdvancedSettingsProps) {
  return (
    <div className="relative" onClick={(e) => {
      const target = e.target as HTMLElement;
      
      // Check if back button was clicked
      const backButton = target.closest('[data-name="Button"]');
      if (backButton && backButton.parentElement?.getAttribute('data-name') === 'Driver') {
        onBack();
        return;
      }

      // Check for Reviews & Ratings - look for SettingItem containers
      const settingItem = target.closest('[data-name="SettingItem"]');
      if (settingItem) {
        const text = settingItem.textContent || '';
        
        // Reviews & Ratings detection
        if (text.includes('Reviews') || text.includes('Ratings') || text.includes('ratings and feedback')) {
          onNavigateToReviews();
          return;
        }

        // Notification Preferences detection
        if (text.includes('Notification') && text.includes('Preferences')) {
          onNavigateToNotifications();
          return;
        }
      }
    }}>
      <Group195 />
    </div>
  );
}