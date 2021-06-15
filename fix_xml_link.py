import os
import re
from glob import glob

src = "/home/gomez/project/mwshow.podonaut.com"
src = "/var/www/mwshow.podonaut.com"

files = glob(f'{src}/**/*.*ml', recursive=True)

for file in files:
    #dst_file = re.sub(src, dst, file)
    dst_file = file
    if os.path.isfile(file):
        #print(file)        
        if re.search('podlove/image', file):
            continue

        if re.search('html', file) or re.search('xml', file):
            try:
                f = open(file, 'r', encoding="utf-8")
                lines = f.readlines()
                f.close()
            except:
                print(file)
                exit()
                
            f = open(dst_file, 'w', encoding="utf-8")
            for line in lines:
                g = re.search('href=.+/feed.+(...)"', line)
                if g and not re.search('index.xml', line):
                    line = re.sub(g.group(1), f'{g.group(1)}index.xml', line)
                    #print(g.group(1))
                    #print(g.group(0))
                    #print(file)
                    #print(line)

                g = re.search('"(https:[\\/]+/)archive.org', line)
                #if g:
                #    line = re.sub(g.group(1), f'https://dts.podtrac.com/redirect.mp3/', line)
                f.write(line)
            f.close()
