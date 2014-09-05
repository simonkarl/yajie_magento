<?php
class Silk_Reloadcore_Model_Locale extends Mage_Core_Model_Locale
{
	const XML_PATH_DEFAULT_CURRENCY = 'general/locale/currency';
	const XML_PATH_DEFAULT_TIMEZONE = 'general/locale/timezone';
    public function getCurrency()
    {
		return Mage::app()->getStore()->getConfig(self::XML_PATH_DEFAULT_CURRENCY);
    }
	 public function getTimezone()
    {
        return Mage::app()->getStore()->getConfig(self::XML_PATH_DEFAULT_TIMEZONE);
    }
}