// beta-input — Pass-through registration (forge-input → beta-input)
import '@adesso-forge/adforge-core';
import { registerPassThrough } from '@adesso-forge/adforge-shared/components/register';

registerPassThrough('forge-input', 'beta-input');
