import { useTranslation } from 'react-i18next';

/**
 * @name useTranslator
 * @description Hook to translate a text.
 * @return {string} Translated text.
 * @example
 *     const SomeComponent = () => {
 *       <Text>{useTranslator('tid_something')}</Text>
 *     }
 */
export const useTranslator = (textToTranslate: string): string => {
  const { t } = useTranslation();
  const translatedText = t(textToTranslate);
  return translatedText;
};
