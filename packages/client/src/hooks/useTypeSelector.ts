import { useSelector } from 'react-redux';
import type { RootState } from '../../../server/store/getInitialState';
import type { TypedUseSelectorHook } from 'react-redux';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
