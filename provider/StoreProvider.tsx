'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';
import type { AppStore } from 'store/store';
import { setCurrentLang } from 'store/slices/configsSlice';
// import { initializeDevice } from '@/store/slices/deviceSlice';
import { makeStore } from 'store/store';

interface Props {
  readonly children: ReactNode;
  currentLang: string;
  // userAgent: string | null;
}

export const StoreProvider = ({ children, currentLang }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(setCurrentLang(currentLang));
    // storeRef.current.dispatch(initializeDevice(userAgent));
  }

  useEffect(() => {
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
