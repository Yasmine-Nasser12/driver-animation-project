import Group163 from '../imports/Group163';

interface NotificationPreferencesProps {
  onBack: () => void;
}

export function NotificationPreferences({ onBack }: NotificationPreferencesProps) {
  return (
    <div className="relative" onClick={(e) => {
      // Check if back button was clicked
      const target = e.target as HTMLElement;
      const backButton = target.closest('[data-name="Button"]');
      if (backButton && backButton.parentElement?.getAttribute('data-name') === 'Driver') {
        onBack();
      }
    }}>
      <Group163 />
    </div>
  );
}
