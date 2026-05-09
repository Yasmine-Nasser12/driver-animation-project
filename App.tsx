import { useState } from "react";
import { DriverHome } from "./components/DriverHome";
import { LiveNavigation } from "./components/LiveNavigation";
import { Trips } from "./components/Trips";
import { Earnings } from "./components/Earnings";
import { EarningsBreakdown } from "./components/EarningsBreakdown";
import { EarningsHistory } from "./components/EarningsHistory";
import { Notifications } from "./components/Notifications";
import { ProfileMenu } from "./components/ProfileMenu";
import { ProfileDetails } from "./components/ProfileDetails";
import { AdvancedSettings } from "./components/AdvancedSettings";
import { NotificationPreferences } from "./components/NotificationPreferences";
import { DriverRatings } from "./components/DriverRatings";
import { DriverReviews } from "./components/DriverReviews";
import { BottomNav } from "./components/BottomNav";
import { SystemStateOverlay } from "./components/SystemStateOverlay";
import { IncomingRequest } from "./components/IncomingRequest";
import { RequestExpired } from "./components/RequestExpired";
import { NoRequests } from "./components/NoRequests";
import { RequestLoading } from "./components/RequestLoading";
import { RequestError } from "./components/RequestError";
import { GoingToPickup } from "./components/GoingToPickup";
import { ArrivedAtPickup } from "./components/ArrivedAtPickup";
import { PickupConfirmed } from "./components/PickupConfirmed";
import { InTransitScreen } from "./components/InTransitScreen";
import { DeliveredScreen } from "./components/DeliveredScreen";
import { ConnectionError } from "./components/ConnectionError";
import { DriverTripsRequests } from "./components/DriverTripsRequests";
import { RequestDetails } from "./components/RequestDetails";
import { RequestAcceptSuccess } from "./components/RequestAcceptSuccess";
import { RequestsListEmpty } from "./components/RequestsListEmpty";
import { RequestsListLoading } from "./components/RequestsListLoading";
import { RequestsListError } from "./components/RequestsListError";
import { FlowNavigator } from "./components/FlowNavigator";

type TripStatus =
  | "none"
  | "assigned"
  | "in-transit"
  | "completed";
type Screen =
  | "home"
  | "live-navigation"
  | "trips"
  | "driver-trips-requests"
  | "request-details"
  | "request-accept-success"
  | "requests-list-empty"
  | "requests-list-loading"
  | "requests-list-error"
  | "earnings"
  | "earnings-breakdown"
  | "earnings-history"
  | "alerts"
  | "profile"
  | "profile-details"
  | "advanced-settings"
  | "notification-preferences"
  | "driver-ratings"
  | "driver-reviews"
  | "incoming-request"
  | "request-loading"
  | "request-error"
  | "request-expired"
  | "no-requests"
  | "going-to-pickup"
  | "arrived-at-pickup"
  | "pickup-confirmed"
  | "in-transit-screen"
  | "delivered"
  | "connection-error";

export default function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [tripStatus, setTripStatus] =
    useState<TripStatus>("none"); // Start with no trip
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("home");
  const [previousScreen, setPreviousScreen] =
    useState<Screen>("profile"); // Track where we came from for back navigation

  // Real state transitions
  const handleStartTrip = () => {
    setTripStatus("in-transit");
    // Stay on home screen, but now showing In Transit state
  };

  const handleViewLiveNavigation = () => {
    setCurrentScreen("live-navigation");
  };

  const handleEndTrip = () => {
    setTripStatus("completed");
    // After completing, go back to home with No Trip state
    setTimeout(() => {
      setTripStatus("none");
      setCurrentScreen("home");
    }, 100);
  };

  const handleGoBack = () => {
    setCurrentScreen("home");
  };

  const handleNavigation = (tab: Screen) => {
    setCurrentScreen(tab);
  };

  // New flow handlers for the complete trip journey
  const handleAcceptRequest = () => {
    setTripStatus("assigned");
    setCurrentScreen("going-to-pickup");
  };

  const handleRejectRequest = () => {
    setCurrentScreen("no-requests");
  };

  const handleRetryRequest = () => {
    setCurrentScreen("request-loading");
    // Simulate loading then show request
    setTimeout(() => {
      setCurrentScreen("incoming-request");
    }, 2000);
  };

  const handleRequestError = () => {
    setCurrentScreen("request-error");
  };

  const handleArrived = () => {
    setCurrentScreen("arrived-at-pickup");
  };

  const handleConfirmPickup = () => {
    setCurrentScreen("pickup-confirmed");
  };

  const handleStartDelivery = () => {
    setTripStatus("in-transit");
    setCurrentScreen("in-transit-screen");
  };

  const handleMarkDelivered = () => {
    setCurrentScreen("delivered");
  };

  const handleComplete = () => {
    setTripStatus("none");
    setCurrentScreen("home");
  };

  const handleRetryConnection = () => {
    setCurrentScreen("home");
  };

  // Trips/Requests list handlers
  const handleViewRequestDetails = (requestId: string) => {
    setCurrentScreen("request-details");
  };

  const handleAcceptFromList = (requestId: string) => {
    setCurrentScreen("request-accept-success");
  };

  const handleAcceptFromDetails = () => {
    setCurrentScreen("request-accept-success");
  };

  const handleRejectFromDetails = () => {
    setCurrentScreen("driver-trips-requests");
  };

  const handleGoToPickupFromSuccess = () => {
    setTripStatus("assigned");
    setCurrentScreen("going-to-pickup");
  };

  const handleViewTrip = (tripId: string) => {
    // Could navigate to trip details screen
    console.log("View trip:", tripId);
  };

  const handleBackToRequestsList = () => {
    setCurrentScreen("driver-trips-requests");
  };

  const handleRefreshRequestsList = () => {
    setCurrentScreen("requests-list-loading");
    setTimeout(() => {
      setCurrentScreen("driver-trips-requests");
    }, 2000);
  };

  const handleRetryRequestsList = () => {
    setCurrentScreen("requests-list-loading");
    setTimeout(() => {
      setCurrentScreen("driver-trips-requests");
    }, 2000);
  };

  return (
    <div className="bg-[#0f2334] min-h-screen">
      {/* System State Control Overlay - Floats above all screens - Demo Only */}
      <SystemStateOverlay
        tripStatus={
          tripStatus as "none" | "assigned" | "in-transit"
        }
        isOnline={isOnline}
        onToggleOnline={() => setIsOnline(!isOnline)}
        onChangeTripStatus={(status) => setTripStatus(status)}
      />

      {/* Flow Navigator - Demo screens navigation */}
      <FlowNavigator onNavigate={(screen) => setCurrentScreen(screen as Screen)} />

      {/* iPhone 13 mini container */}
      <div className="max-w-[375px] mx-auto relative">
        {currentScreen === "home" ? (
          <>
            <DriverHome
              isOnline={isOnline}
              onToggleOnline={() => setIsOnline(!isOnline)}
              tripStatus={tripStatus}
              onStartTrip={handleStartTrip}
              onViewLiveNavigation={handleViewLiveNavigation}
              onViewAllTrips={() => setCurrentScreen("trips")}
            />
            <BottomNav
              activeTab="home"
              onNavigate={handleNavigation}
            />
          </>
        ) : currentScreen === "incoming-request" ? (
          <IncomingRequest
            onAccept={handleAcceptRequest}
            onReject={handleRejectRequest}
          />
        ) : currentScreen === "request-loading" ? (
          <RequestLoading onCancel={handleGoBack} />
        ) : currentScreen === "request-error" ? (
          <RequestError
            onRetry={handleRetryRequest}
            onBackToHome={handleGoBack}
          />
        ) : currentScreen === "request-expired" ? (
          <RequestExpired onBackToHome={handleGoBack} />
        ) : currentScreen === "no-requests" ? (
          <NoRequests
            onBackToHome={handleGoBack}
            onRefresh={handleRetryRequest}
            onGoOffline={() => {
              setIsOnline(false);
              setCurrentScreen("home");
            }}
          />
        ) : currentScreen === "going-to-pickup" ? (
          <GoingToPickup onArrived={handleArrived} />
        ) : currentScreen === "arrived-at-pickup" ? (
          <ArrivedAtPickup onConfirmPickup={handleConfirmPickup} />
        ) : currentScreen === "pickup-confirmed" ? (
          <PickupConfirmed onStartDelivery={handleStartDelivery} />
        ) : currentScreen === "in-transit-screen" ? (
          <InTransitScreen onMarkDelivered={handleMarkDelivered} />
        ) : currentScreen === "delivered" ? (
          <DeliveredScreen onComplete={handleComplete} />
        ) : currentScreen === "connection-error" ? (
          <ConnectionError onRetry={handleRetryConnection} />
        ) : currentScreen === "live-navigation" ? (
          <LiveNavigation
            onEndTrip={handleEndTrip}
            onGoBack={handleGoBack}
          />
        ) : currentScreen === "trips" ? (
          <>
            <DriverTripsRequests
              onViewRequestDetails={handleViewRequestDetails}
              onAcceptRequest={handleAcceptFromList}
              onViewTrip={handleViewTrip}
            />
            <BottomNav
              activeTab="trips"
              onNavigate={handleNavigation}
            />
          </>
        ) : currentScreen === "driver-trips-requests" ? (
          <>
            <DriverTripsRequests
              onViewRequestDetails={handleViewRequestDetails}
              onAcceptRequest={handleAcceptFromList}
              onViewTrip={handleViewTrip}
            />
            <BottomNav
              activeTab="trips"
              onNavigate={handleNavigation}
            />
          </>
        ) : currentScreen === "request-details" ? (
          <RequestDetails
            requestId="REQ-4522"
            onAccept={handleAcceptFromDetails}
            onReject={handleRejectFromDetails}
            onBack={handleBackToRequestsList}
          />
        ) : currentScreen === "request-accept-success" ? (
          <RequestAcceptSuccess onGoToPickup={handleGoToPickupFromSuccess} />
        ) : currentScreen === "requests-list-empty" ? (
          <>
            <RequestsListEmpty onRefresh={handleRefreshRequestsList} />
            <BottomNav
              activeTab="trips"
              onNavigate={handleNavigation}
            />
          </>
        ) : currentScreen === "requests-list-loading" ? (
          <>
            <RequestsListLoading />
            <BottomNav
              activeTab="trips"
              onNavigate={handleNavigation}
            />
          </>
        ) : currentScreen === "requests-list-error" ? (
          <>
            <RequestsListError onRetry={handleRetryRequestsList} />
            <BottomNav
              activeTab="trips"
              onNavigate={handleNavigation}
            />
          </>
        ) : currentScreen === "earnings" ? (
          <>
            <Earnings
              onViewBreakdown={() =>
                setCurrentScreen("earnings-breakdown")
              }
              onViewHistory={() =>
                setCurrentScreen("earnings-history")
              }
            />
            <BottomNav
              activeTab="earnings"
              onNavigate={handleNavigation}
            />
          </>
        ) : currentScreen === "earnings-breakdown" ? (
          <EarningsBreakdown
            onBack={() => setCurrentScreen("earnings")}
          />
        ) : currentScreen === "earnings-history" ? (
          <EarningsHistory
            onBack={() => setCurrentScreen("earnings")}
          />
        ) : currentScreen === "alerts" ? (
          <>
            <Notifications />
            <BottomNav
              activeTab="alerts"
              onNavigate={handleNavigation}
            />
          </>
        ) : currentScreen === "profile" ? (
          <>
            <ProfileMenu
              onNavigateToProfile={() =>
                setCurrentScreen("profile-details")
              }
              onNavigateToSettings={() =>
                setCurrentScreen("advanced-settings")
              }
              onNavigateToReviews={() => {
                setPreviousScreen("profile");
                setCurrentScreen("driver-ratings");
              }}
            />
            <BottomNav
              activeTab="profile"
              onNavigate={handleNavigation}
            />
          </>
        ) : currentScreen === "profile-details" ? (
          <ProfileDetails
            onBack={() => setCurrentScreen("profile")}
          />
        ) : currentScreen === "advanced-settings" ? (
          <AdvancedSettings
            onBack={() => setCurrentScreen("profile")}
            onNavigateToReviews={() => {
              setPreviousScreen("advanced-settings");
              setCurrentScreen("driver-ratings");
            }}
            onNavigateToNotifications={() =>
              setCurrentScreen("notification-preferences")
            }
          />
        ) : currentScreen === "notification-preferences" ? (
          <NotificationPreferences
            onBack={() => setCurrentScreen("advanced-settings")}
          />
        ) : currentScreen === "driver-ratings" ? (
          <DriverRatings
            onBack={() => setCurrentScreen(previousScreen)}
            onViewAllReviews={() =>
              setCurrentScreen("driver-reviews")
            }
          />
        ) : currentScreen === "driver-reviews" ? (
          <DriverReviews
            onBack={() => setCurrentScreen("driver-ratings")}
          />
        ) : (
          <>
            <div className="min-h-screen flex items-center justify-center">
              <p className="text-[rgba(203,251,241,0.5)] text-center">
                {currentScreen.charAt(0).toUpperCase() +
                  currentScreen.slice(1)}{" "}
                Screen
                <br />
                <span className="text-sm">Coming Soon</span>
              </p>
            </div>
            <BottomNav
              activeTab={currentScreen as any}
              onNavigate={handleNavigation}
            />
          </>
        )}
      </div>
    </div>
  );
}