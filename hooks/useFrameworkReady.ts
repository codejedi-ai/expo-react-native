import { useEffect } from 'react';
import { Platform } from 'react-native';

// Only include window declaration for web
declare global {
  var window: any;
}

export function useFrameworkReady() {
  useEffect(() => {
    // Only call frameworkReady on web platform where window exists
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      window.frameworkReady?.();
    }
  }, []);
}
