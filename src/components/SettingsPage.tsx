import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Fuel, 
  Eye, 
  Save,
  AlertTriangle,
  Settings as SettingsIcon
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NotificationSettings {
  emailAlerts: boolean;
  smsAlerts: boolean;
  fuelThreshold: number;
  drowsinesssensitivity: number;
  alertFrequency: number;
}

export function SettingsPage() {
  const { toast } = useToast();
  const [settings, setSettings] = useState<NotificationSettings>({
    emailAlerts: true,
    smsAlerts: false,
    fuelThreshold: 20,
    drowsinesssensitivity: 75,
    alertFrequency: 5
  });

  const handleSave = () => {
    // Simulate saving settings
    toast({
      title: "Settings saved",
      description: "Your notification preferences have been updated successfully.",
    });
  };

  const updateSetting = <K extends keyof NotificationSettings>(
    key: K,
    value: NotificationSettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <SettingsIcon className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">MoniTruck Settings</h1>
      </div>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-primary" />
            <span>Notification Preferences</span>
          </CardTitle>
          <CardDescription>
            Configure how you want to receive alerts and notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Email Alerts */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label htmlFor="email-alerts" className="text-sm font-medium">
                  Email Alerts
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive alerts via email
                </p>
              </div>
            </div>
            <Switch
              id="email-alerts"
              checked={settings.emailAlerts}
              onCheckedChange={(checked) => updateSetting("emailAlerts", checked)}
            />
          </div>

          <Separator />

          {/* SMS Alerts */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
              <div>
                <Label htmlFor="sms-alerts" className="text-sm font-medium">
                  SMS Alerts
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive critical alerts via SMS
                </p>
              </div>
            </div>
            <Switch
              id="sms-alerts"
              checked={settings.smsAlerts}
              onCheckedChange={(checked) => updateSetting("smsAlerts", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Alert Thresholds */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>Alert Thresholds</span>
          </CardTitle>
          <CardDescription>
            Set sensitivity levels and thresholds for various alerts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Fuel Level Threshold */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Fuel className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="text-sm font-medium">Fuel Level Alert</Label>
                  <p className="text-sm text-muted-foreground">
                    Alert when fuel drops below this percentage
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="text-sm">
                {settings.fuelThreshold}%
              </Badge>
            </div>
            <div className="px-8">
              <Slider
                value={[settings.fuelThreshold]}
                onValueChange={(value) => updateSetting("fuelThreshold", value[0])}
                max={50}
                min={5}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>5%</span>
                <span>50%</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Drowsiness Detection Sensitivity */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Eye className="h-5 w-5 text-muted-foreground" />
                <div>
                  <Label className="text-sm font-medium">Drowsiness Detection</Label>
                  <p className="text-sm text-muted-foreground">
                    AI model sensitivity for detecting drowsiness
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="text-sm">
                {settings.drowsinesssensitivity}%
              </Badge>
            </div>
            <div className="px-8">
              <Slider
                value={[settings.drowsinesssensitivity]}
                onValueChange={(value) => updateSetting("drowsinesssensitivity", value[0])}
                max={100}
                min={25}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Low (25%)</span>
                <span>High (100%)</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Alert Frequency */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <Label className="text-sm font-medium">Alert Frequency</Label>
                <p className="text-sm text-muted-foreground">
                  Minimum minutes between repeated alerts
                </p>
              </div>
              <div className="w-20">
                <Input
                  type="number"
                  value={settings.alertFrequency}
                  onChange={(e) => updateSetting("alertFrequency", parseInt(e.target.value) || 1)}
                  min={1}
                  max={60}
                  className="text-center"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end pt-4">
        <Button onClick={handleSave} className="flex items-center space-x-2">
          <Save className="h-4 w-4" />
          <span>Save Settings</span>
        </Button>
      </div>
    </div>
  );
}