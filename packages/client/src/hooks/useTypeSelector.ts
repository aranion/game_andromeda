import { useSelector } from 'react-redux';
import type { RootState } from 'src/store';
import type { TypedUseSelectorHook } from 'react-redux';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
