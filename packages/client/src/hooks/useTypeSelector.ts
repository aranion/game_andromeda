import { useSelector } from 'react-redux';
import type { RootState } from './../store/index';
import type { TypedUseSelectorHook } from 'react-redux';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
