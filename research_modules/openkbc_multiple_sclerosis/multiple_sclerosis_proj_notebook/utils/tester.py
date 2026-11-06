from lib.externalHandler import handlers as dataHandler
import pandas as pd
from memory_profiler import memory_usage

def f1():
    arr = []
    filename = '/Users/junheeyun/OpenKBC/multiple_sclerosis_proj/data/rsem_counts/87617a-CD4.genes.results'
    for a in range(5):
        df = dataHandler.get_column(filename, 'expected_count', opt=0)
        arr.append(df)
    result = pd.concat(arr, axis=1)
    return result

def f2():
    index
    filename = '/Users/junheeyun/OpenKBC/multiple_sclerosis_proj/data/rsem_counts/87617a-CD4.genes.results'
    for a in range(5):
        index_list, value_list = dataHandler.get_column(filename, 'expected_count')
        arr.append(df)
    return arr

if __name__ == '__main__': 

    mem_usage_opt1 = memory_usage(f1)
    mem_usage_opt2 = memory_usage(f2)

    print('Memory usage (in chunks of .1 seconds): %s' % mem_usage_opt1)
    print('Maximum memory usage: %s' % max(mem_usage_opt1))

    print('Memory usage (in chunks of .1 seconds): %s' % mem_usage_opt2)
    print('Maximum memory usage: %s' % max(mem_usage_opt2))