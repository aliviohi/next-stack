import { useCallback, useState } from 'react';
import type { LoginCredentials, RegisterCredentials, User, AuthState } from '../types';

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
  });

  const login = useCallback(async (credentials: LoginCredentials) => {
    setAuth((prev) => ({ ...prev, isLoading: true }));
    try {
      // TODO: Implement actual login API call
      console.log('Login with:', credentials);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser: User = {
        id: '1',
        email: credentials.email,
        firstName: 'John',
        lastName: 'Doe',
        role: 'user',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setAuth({
        user: mockUser,
        token: 'mock-token',
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setAuth((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, []);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    setAuth((prev) => ({ ...prev, isLoading: true }));
    try {
      // TODO: Implement actual register API call
      console.log('Register with:', credentials);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser: User = {
        id: '1',
        email: credentials.email,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        role: 'user',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setAuth({
        user: mockUser,
        token: 'mock-token',
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      setAuth((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    setAuth((prev) => ({ ...prev, isLoading: true }));
    try {
      // TODO: Implement actual logout API call
      console.log('Logout');
      await new Promise((resolve) => setTimeout(resolve, 500));

      setAuth({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error) {
      setAuth((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, []);

  const updateProfile = useCallback(
    async (userData: Partial<User>) => {
      if (!auth.user) return;

      setAuth((prev) => ({ ...prev, isLoading: true }));
      try {
        // TODO: Implement actual profile update API call
        console.log('Update profile:', userData);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setAuth((prev) => ({
          ...prev,
          user: prev.user ? { ...prev.user, ...userData } : null,
          isLoading: false,
        }));
      } catch (error) {
        setAuth((prev) => ({ ...prev, isLoading: false }));
        throw error;
      }
    },
    [auth.user],
  );

  const changePassword = useCallback(async (currentPassword: string, newPassword: string) => {
    setAuth((prev) => ({ ...prev, isLoading: true }));
    try {
      // TODO: Implement actual password change API call
      console.log('Change password', { currentPassword, newPassword });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAuth((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      setAuth((prev) => ({ ...prev, isLoading: false }));
      throw error;
    }
  }, []);

  return {
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
  };
}
