const getSliptedValue = (value: string) => {
  if (value) return value?.split(' ');
	return '';
};

export {getSliptedValue};
